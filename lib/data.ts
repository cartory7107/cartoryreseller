import { Award, BarChart3, BookOpen, Boxes, CheckCircle2, Globe2, HelpCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Courses", href: "#courses" },
  { label: "News & Updates", href: "#news" },
  { label: "Challenges", href: "#challenges" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Rewards", href: "#rewards" },
  { label: "Help Center", href: "#help" },
  { label: "Become a Reseller", href: "#become" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Login/Register", href: "#register" }
];

export const products = [
  { name: "Premium AirPods Pro Clone", category: "Electronics", basePrice: 1450, sellingPrice: 2190, stock: "In Stock", featured: true, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80" },
  { name: "Smart Fitness Watch X9", category: "Wearables", basePrice: 1850, sellingPrice: 2990, stock: "In Stock", featured: true, image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=80" },
  { name: "Aesthetic LED Moon Lamp", category: "Home Decor", basePrice: 620, sellingPrice: 1190, stock: "Low Stock", featured: false, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80" }
];

export const courses = [
  { title: "Dropshipping Mastery Bangladesh", instructor: "Cartory Academy", category: "Foundation", minutes: 180 },
  { title: "Facebook Ads for E-commerce", instructor: "Growth Team", category: "Marketing", minutes: 145 },
  { title: "Winning Product Research", instructor: "Product Lab", category: "Research", minutes: 92 },
  { title: "Customer Conversion Secrets", instructor: "Sales Ops", category: "Conversion", minutes: 110 }
];

export const leaderboard = [
  { rank: 1, name: "Nusrat Jahan", orders: 1264, monthlyOrders: 214, revenue: 1845000, badge: "🥇 Gold Seller" },
  { rank: 2, name: "Tanvir Ahmed", orders: 1032, monthlyOrders: 188, revenue: 1520400, badge: "🥈 Silver Seller" },
  { rank: 3, name: "Farhana Islam", orders: 884, monthlyOrders: 166, revenue: 1289000, badge: "🥉 Bronze Seller" },
  { rank: 4, name: "Mehedi Hasan", orders: 742, monthlyOrders: 138, revenue: 1034600, badge: "Top Closer" },
  { rank: 5, name: "Sadia Akter", orders: 689, monthlyOrders: 121, revenue: 940300, badge: "Rising Star" }
];

export const challenges = [
  { title: "Complete 50 Orders", target: 50, progress: 84, reward: "Gift Voucher" },
  { title: "Complete 100 Orders", target: 100, progress: 62, reward: "Smart Watch" },
  { title: "Complete 500 Orders", target: 500, progress: 38, reward: "Laptop" }
];

export const rewards = [
  ["50 Orders", "Gift Voucher"],
  ["100 Orders", "Smart Watch"],
  ["250 Orders", "Smartphone"],
  ["500 Orders", "Laptop"],
  ["1000 Orders", "International Trip"]
];

export const stats = [
  { label: "Total Sales", value: "৳42.8M", icon: BarChart3 },
  { label: "Total Orders", value: "18,420", icon: Boxes },
  { label: "Pending Orders", value: "312", icon: Truck },
  { label: "Total Resellers", value: "4,850", icon: Globe2 },
  { label: "Verification Requests", value: "96", icon: ShieldCheck },
  { label: "Revenue", value: "৳8.4M", icon: Sparkles },
  { label: "Active Challenges", value: "12", icon: Award },
  { label: "Courses", value: "24", icon: BookOpen }
];

export const features = [
  { title: "Verified reseller onboarding", description: "NID, passport, or government ID review before dashboard access.", icon: ShieldCheck },
  { title: "Profit-safe pricing", description: "Resellers see base cost and cannot sell below the minimum price.", icon: CheckCircle2 },
  { title: "Learning-first growth", description: "Courses, help center tutorials, and an AI assistant are built in.", icon: HelpCircle }
];
