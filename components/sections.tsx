"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bell, Check, CloudUpload, LockKeyhole, MessageCircle, Play, Shield, Sparkles, Star } from "lucide-react";
import { challenges, courses, features, leaderboard, products, rewards, stats } from "@/lib/data";
import { calculateProfit, formatBDT } from "@/lib/utils";

const fadeUp = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 lg:px-6 lg:pb-24 lg:pt-24">
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div {...fadeUp}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm dark:bg-slate-900/70"><Sparkles size={16} /> Bangladesh's premium reseller ecosystem</div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">Build a profitable <span className="gradient-text">Cartory dropshipping</span> business.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Cartory Reseller Hub combines verified onboarding, product sourcing, profit-safe pricing, courses, challenges, rewards, and admin-grade operations in one ultra-fast SaaS platform.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 font-bold text-white shadow-xl shadow-sky-500/25">Become a Reseller <ArrowRight size={18} /></a>
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/70 px-6 py-3 font-bold text-sky-700 backdrop-blur dark:bg-slate-900/70">Explore Products</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            {["JWT + RBAC", "3% Commission", "Live Challenges"].map((item) => <div className="glass rounded-2xl p-3 font-semibold" key={item}><Check className="mb-2 text-sky-500" size={18} />{item}</div>)}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="glass rounded-[2rem] p-4">
          <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between"><p className="font-bold">Reseller Command Center</p><span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">Live</span></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.slice(0, 4).map((stat) => <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4"><stat.icon className="mb-4 text-sky-300" /><p className="text-2xl font-black">{stat.value}</p><p className="text-sm text-slate-400">{stat.label}</p></div>)}
            </div>
            <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-blue-600/10 p-4">
              <p className="mb-4 text-sm text-slate-300">Revenue Analytics</p>
              <div className="flex h-32 items-end gap-2">{[42, 66, 50, 88, 76, 104, 96, 128, 142, 170, 156, 196].map((height, i) => <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-sky-600 to-cyan-300" style={{ height: `${height / 2}px` }} />)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProductShowcase() {
  return <Section id="products" eyebrow="Product management" title="Publish winning products with reseller-safe pricing." description="Admin product records include slug, SEO metadata, tags, image upload, image URL, galleries, video URL, base cost, category, stock status, featured flag, publish and unpublish controls.">
    <div className="grid gap-5 lg:grid-cols-3">{products.map((product) => { const calc = calculateProfit(product.basePrice, product.sellingPrice); return <motion.article {...fadeUp} key={product.name} className="glass overflow-hidden rounded-3xl"><img src={product.image} alt="" className="h-52 w-full object-cover" /><div className="p-5"><div className="mb-3 flex items-center justify-between"><span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">{product.category}</span><span className="text-xs text-emerald-500">{product.stock}</span></div><h3 className="text-xl font-black">{product.name}</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><Metric label="Base price" value={formatBDT(product.basePrice)} /><Metric label="Selling price" value={formatBDT(product.sellingPrice)} /><Metric label="Profit" value={formatBDT(calc.profit)} /><Metric label="+3% commission" value={formatBDT(calc.extraCommission)} /></div></div></motion.article>; })}</div>
  </Section>;
}

export function CoursesPreview() {
  return <Section id="courses" eyebrow="Cartory Academy" title="Courses that turn beginners into operators." description="Embedded video lessons, external course links, SEO data, instructors, categories, and admin CRUD are designed into the course system.">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{courses.map((course) => <motion.div {...fadeUp} className="glass rounded-3xl p-5" key={course.title}><div className="mb-5 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 dark:from-slate-800 dark:to-slate-900"><Play /></div><span className="text-xs font-bold uppercase text-sky-500">{course.category}</span><h3 className="mt-2 min-h-14 text-lg font-black">{course.title}</h3><p className="text-sm text-slate-500">{course.instructor} • {course.minutes} min</p></motion.div>)}</div>
  </Section>;
}

export function LeaderboardSection() {
  return <Section id="leaderboard" eyebrow="Live leaderboard" title="Top resellers ranked by orders and revenue." description="Rank logic combines total orders, monthly orders, and generated revenue. The public preview shows the top 10 with gold, silver, and bronze seller badges.">
    <div className="glass overflow-hidden rounded-3xl"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead className="bg-sky-50/80 text-sm text-slate-500 dark:bg-slate-900"><tr><th className="p-4">Rank</th><th>Name</th><th>Total Orders</th><th>Monthly Orders</th><th>Revenue</th><th>Badge</th></tr></thead><tbody>{leaderboard.map((row) => <tr key={row.rank} className="border-t border-sky-100/60 dark:border-slate-800"><td className="p-4 font-black">#{row.rank}</td><td className="font-bold">{row.name}</td><td>{row.orders}</td><td>{row.monthlyOrders}</td><td>{formatBDT(row.revenue)}</td><td>{row.badge}</td></tr>)}</tbody></table></div></div>
  </Section>;
}

export function ChallengesRewards() {
  return <Section id="challenges" eyebrow="Challenges & rewards" title="Gamified growth for high-performing sellers." description="Admins can create milestones like 50, 100, and 500 orders while progress bars and rewards keep resellers motivated.">
    <div className="grid gap-6 lg:grid-cols-2"><div className="space-y-4">{challenges.map((challenge) => <div key={challenge.title} className="glass rounded-3xl p-5"><div className="flex items-center justify-between"><h3 className="font-black">{challenge.title}</h3><span className="text-sm font-bold text-sky-600">{challenge.progress}%</span></div><div className="mt-4 h-3 rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600" style={{ width: `${challenge.progress}%` }} /></div><p className="mt-3 text-sm text-slate-500">Reward: {challenge.reward}</p></div>)}</div><div id="rewards" className="glass rounded-3xl p-5"><h3 className="mb-4 text-2xl font-black">Winning Prizes</h3><div className="grid gap-3">{rewards.map(([orders, reward]) => <div key={orders} className="flex items-center justify-between rounded-2xl bg-white/70 p-4 dark:bg-slate-900/70"><span className="font-bold">{orders}</span><span className="text-sky-600">{reward}</span></div>)}</div></div></div>
  </Section>;
}

export function AdminDashboard() {
  return <Section id="dashboard" eyebrow="Admin dashboard" title="A full control center for Cartory operations." description="Manage products, orders, verification requests, news, courses, challenges, rewards, reseller analytics, and real-time notifications.">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <div className="glass rounded-3xl p-5" key={stat.label}><stat.icon className="mb-4 text-sky-500" /><p className="text-2xl font-black">{stat.value}</p><p className="text-sm text-slate-500">{stat.label}</p></div>)}</div>
    <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><div className="glass rounded-3xl p-5"><h3 className="font-black">Orders Analytics</h3><div className="mt-6 flex h-48 items-end gap-3">{[70, 110, 86, 132, 150, 122, 178, 166, 204].map((h, i) => <div key={i} className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-sky-300" style={{ height: h }} />)}</div></div><div className="glass rounded-3xl p-5"><h3 className="font-black">Recent Activity Feed</h3>{["New order from Dhaka", "New reseller request", "Challenge completed", "Reward unlocked"].map((item) => <div className="mt-4 flex items-center gap-3 rounded-2xl bg-sky-50 p-3 dark:bg-slate-900" key={item}><Bell className="text-sky-500" size={18} /><span className="text-sm font-semibold">{item}</span></div>)}</div></div>
  </Section>;
}

export function RegistrationAndSecurity() {
  return <Section id="register" eyebrow="Verification & security" title="Approval-gated reseller access, built for trust." description="Registration is never instantly approved. Admins can approve, reject, or request more information before dashboard access is unlocked.">
    <div className="grid gap-6 lg:grid-cols-2"><form className="glass grid gap-4 rounded-3xl p-6"><input placeholder="Full name" className="rounded-2xl border border-sky-200 bg-white/70 px-4 py-3 dark:bg-slate-900" /><input placeholder="Email" className="rounded-2xl border border-sky-200 bg-white/70 px-4 py-3 dark:bg-slate-900" /><input placeholder="Phone" className="rounded-2xl border border-sky-200 bg-white/70 px-4 py-3 dark:bg-slate-900" /><input placeholder="Country" className="rounded-2xl border border-sky-200 bg-white/70 px-4 py-3 dark:bg-slate-900" /><div className="rounded-2xl border border-dashed border-sky-300 p-6 text-center"><CloudUpload className="mx-auto mb-2 text-sky-500" />Upload NID, passport, or government ID</div><button type="button" className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 py-3 font-bold text-white">Register as a Dropshipper</button></form><div className="grid gap-4">{["JWT Authentication", "Role-based Access Control", "Secure File Upload", "Rate Limiting", "Input Validation", "XSS Protection", "CSRF Protection"].map((item) => <div className="glass flex items-center gap-3 rounded-2xl p-4" key={item}><LockKeyhole className="text-sky-500" size={18} /><span className="font-bold">{item}</span></div>)}</div></div>
  </Section>;
}

export function NewsHelpFaq() {
  return <Section id="help" eyebrow="Support system" title="News, help center, tutorials, FAQ, and WhatsApp support." description="Keep resellers updated with latest announcements and guide them through every operational step.">
    <div id="news" className="grid gap-6 lg:grid-cols-3"><div className="glass rounded-3xl p-6"><h3 className="mb-2 font-black">News & Updates</h3><p className="text-sm text-slate-500">Admin-created posts include title, slug, description, thumbnail, SEO metadata, and publish date.</p></div><div className="glass rounded-3xl p-6"><h3 className="mb-2 font-black">Knowledge Base</h3><p className="text-sm text-slate-500">Tutorials cover pricing, checkout, order tracking, returns, and commission payouts.</p></div><a href="https://wa.me/8801700000000" className="glass rounded-3xl p-6 transition hover:scale-[1.01]"><MessageCircle className="mb-3 text-emerald-500" /><h3 className="mb-2 font-black">Contact Cartory Support</h3><p className="text-sm text-slate-500">Direct WhatsApp redirection for urgent reseller help.</p></a></div>
    <div className="mt-6 grid gap-4 lg:grid-cols-2">{["Can I sell below the base price? No. The system blocks below-minimum pricing.", "When do I get approved? After admin verification of your submitted identity document.", "How is commission calculated? Profit plus an additional 3% commission on successful orders.", "Can admins manage rewards? Yes. Rewards are fully manageable from the admin dashboard."].map((faq) => <details className="glass rounded-2xl p-4" key={faq}><summary className="cursor-pointer font-bold">{faq.split("?")[0]}?</summary><p className="mt-3 text-sm text-slate-500">{faq.split("? ")[1]}</p></details>)}</div>
  </Section>;
}

export function FeatureBand() { return <Section id="become" eyebrow="Why Cartory" title="Premium infrastructure for thousands of Bangladeshi resellers." description="Built with Next.js 15, TypeScript, Tailwind CSS, ShadCN-style components, Framer Motion, Express, Prisma, PostgreSQL, Cloudinary, and NextAuth deployment paths."><div className="grid gap-5 lg:grid-cols-3">{features.map((feature) => <div className="glass rounded-3xl p-6" key={feature.title}><feature.icon className="mb-4 text-sky-500" /><h3 className="text-xl font-black">{feature.title}</h3><p className="mt-2 text-slate-500">{feature.description}</p></div>)}</div></Section>; }

function Section({ id, eyebrow, title, description, children }: { id: string; eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return <section id={id} className="px-4 py-16 lg:px-6"><div className="mx-auto max-w-7xl"><motion.div {...fadeUp} className="mb-8 max-w-3xl"><p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-sky-500">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p></motion.div>{children}</div></section>;
}

function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-sky-50 p-3 dark:bg-slate-900"><p className="text-xs text-slate-500">{label}</p><p className="font-black">{value}</p></div>; }
