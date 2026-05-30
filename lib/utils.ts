export function formatBDT(value: number) {
  return new Intl.NumberFormat("en-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(value);
}

export function calculateProfit(basePrice: number, sellingPrice: number) {
  const profit = Math.max(sellingPrice - basePrice, 0);
  const extraCommission = Math.round(sellingPrice * 0.03);
  return { profit, extraCommission, total: profit + extraCommission };
}
