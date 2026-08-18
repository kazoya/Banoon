export function formatNumber(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export const departmentLabel: Record<string, string> = {
  sales: "المبيعات",
  marketing: "التسويق",
  production: "الإنتاج",
  quality: "الجودة",
  packing: "التعبئة",
  schools: "المدارس والرياض",
  distributors: "الموزّعون",
  management: "الإدارة",
};
