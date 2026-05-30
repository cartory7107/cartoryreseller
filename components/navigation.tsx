"use client";

import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/30 bg-white/70 backdrop-blur-2xl dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <a href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-2 text-white shadow-lg shadow-sky-500/30"><ShoppingBag size={20} /></span>
          <span>Cartory <span className="gradient-text">Reseller Hub</span></span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-100 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle dark mode" onClick={() => setDark(!dark)} className="rounded-full border border-sky-200/50 p-2 transition hover:bg-sky-100 dark:border-slate-700 dark:hover:bg-slate-800">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#register" className="hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sky-500/25 sm:inline-flex">Start Selling</a>
          <button onClick={() => setOpen(!open)} className="rounded-full border border-sky-200/50 p-2 xl:hidden" aria-label="Open menu">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-4 mb-4 grid rounded-3xl p-4 xl:hidden">
          {navItems.map((item) => <a onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-sky-50 dark:hover:bg-slate-800" key={item.label} href={item.href}>{item.label}</a>)}
        </div>
      )}
    </header>
  );
}
