import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { AiAssistant } from "@/components/ai-assistant";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartory Reseller Hub | Bangladesh Dropshipping Platform",
  description: "Premium SaaS-style reseller and dropshipping platform for Cartory sellers in Bangladesh.",
  keywords: ["Cartory", "reseller", "dropshipping", "Bangladesh", "ecommerce", "SaaS"],
  openGraph: {
    title: "Cartory Reseller Hub",
    description: "Launch, manage, and grow a profitable Cartory dropshipping business.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}
