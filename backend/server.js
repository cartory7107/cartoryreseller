const cors = require("cors");
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const app = express();
const jwtSecret = process.env.JWT_SECRET ?? "development-only-secret";

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.FRONTEND_URL ?? "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(rateLimit({ windowMs: 60_000, limit: 120 }));

const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  country: z.string().min(2),
  documentUrl: z.string().url()
});

const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  baseCostPrice: z.number().positive(),
  category: z.string().min(2),
  stockStatus: z.string().min(2),
  published: z.boolean().default(false)
});

const orderSchema = z.object({
  resellerId: z.string(),
  productId: z.string(),
  customerName: z.string().min(2),
  phone: z.string().min(6),
  address: z.string().min(5),
  city: z.string().min(2),
  area: z.string().min(2),
  notes: z.string().optional(),
  basePrice: z.number().positive(),
  sellingPrice: z.number().positive()
}).refine((data) => data.sellingPrice >= data.basePrice, { message: "Selling price cannot be below base price." });

function requireRole(roles) {
  return (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Missing token" });
    try {
      const payload = jwt.verify(token, jwtSecret);
      if (!roles.includes(payload.role)) return res.status(403).json({ error: "Forbidden" });
      res.locals.user = payload;
      next();
    } catch {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}

app.get("/health", (_req, res) => res.json({ ok: true, service: "cartory-reseller-api" }));

app.post("/auth/demo-token", (req, res) => {
  const role = req.body.role === "ADMIN" ? "ADMIN" : "RESELLER";
  res.json({ token: jwt.sign({ sub: "demo-user", role }, jwtSecret, { expiresIn: "15m" }) });
});

app.post("/verification/request", (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  res.status(202).json({ status: "PENDING_VERIFICATION", request: parsed.data });
});

app.post("/admin/products", requireRole(["ADMIN"]), (req, res) => {
  const parsed = productSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  res.status(201).json({ product: parsed.data });
});

app.post("/orders", requireRole(["ADMIN", "RESELLER"]), (req, res) => {
  const parsed = orderSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const profit = parsed.data.sellingPrice - parsed.data.basePrice;
  const commission = Math.round(parsed.data.sellingPrice * 0.03);
  res.status(201).json({ order: { ...parsed.data, status: "PENDING", profit, commission, totalProfit: profit + commission } });
});

app.patch("/admin/orders/:id/status", requireRole(["ADMIN"]), (req, res) => {
  const status = z.enum(["PENDING", "CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).safeParse(req.body.status);
  if (!status.success) return res.status(400).json({ error: status.error.flatten() });
  res.json({ id: req.params.id, status: status.data });
});

app.listen(process.env.PORT ?? 4000, () => {
  console.log(`Cartory API listening on ${process.env.PORT ?? 4000}`);
});
