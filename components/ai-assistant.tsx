"use client";

import { Bot, Send, X } from "lucide-react";
import { useState } from "react";

const answers = [
  "You can register as a dropshipper, upload your NID or passport, and wait for admin verification.",
  "Profit is calculated as selling price minus base price, plus a 3% commission on every successful order.",
  "Use Products to choose winning items, set a compliant selling price, and share checkout links with customers.",
  "Order stages are Pending, Confirmed, Processing, Shipped, Delivered, and Cancelled."
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hi! I can explain products, orders, commissions, verification, and beginner reseller steps." }]);

  function ask() {
    setMessages((current) => [...current, { role: "user", text: "How do I earn?" }, { role: "assistant", text: answers[current.length % answers.length] }]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="glass mb-3 w-[min(92vw,380px)] overflow-hidden rounded-3xl">
          <div className="flex items-center justify-between border-b border-sky-200/30 p-4">
            <div className="flex items-center gap-3"><span className="rounded-2xl bg-sky-500 p-2 text-white"><Bot size={18} /></span><div><p className="font-bold">Cartory AI Assistant</p><p className="text-xs text-slate-500">Site-wide reseller guide</p></div></div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button>
          </div>
          <div className="max-h-80 space-y-3 overflow-auto p-4">
            {messages.map((message, index) => <div key={index} className={`rounded-2xl p-3 text-sm ${message.role === "assistant" ? "bg-sky-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200" : "ml-10 bg-blue-600 text-white"}`}>{message.text}</div>)}
          </div>
          <div className="flex gap-2 border-t border-sky-200/30 p-3">
            <input className="min-w-0 flex-1 rounded-2xl border border-sky-200/50 bg-white/70 px-3 py-2 text-sm outline-none dark:bg-slate-900" placeholder="Ask about commissions..." />
            <button onClick={ask} className="rounded-2xl bg-sky-500 p-3 text-white"><Send size={16} /></button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-gradient-to-br from-sky-400 to-blue-700 p-4 text-white shadow-2xl shadow-sky-500/40 transition hover:scale-105" aria-label="Open AI assistant"><Bot /></button>
    </div>
  );
}
