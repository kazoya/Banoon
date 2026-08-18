function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\s]+/)
    .map((e) => e.trim())
    .filter((e) => e.includes("@"));
}

export const siteConfig = {
  nameAr: "بنون كيدز",
  nameEn: "Banoon Kids",
  brandLine: "BANOON",
  productName: "تصور النمو والمبيعات للمدارس والرياض",
  parentAr: "شركة دلتا للصناعات البلاستيكية",
  parentEn: "Delta Plast for Plastic Industries",
  recipient: "مدير المبيعات",
  recipientRole: "بنون كيدز — دلتا للصناعات البلاستيكية",
  country: "الأردن",
  city: "عمّان",
  cityDetailAr: "عمّان — مدينة الملك عبدالله الثاني الصناعية",
  since: 1990,
  websiteUrl: "https://www.banoonkids.com/",
  defaultMapsUrl: "",
  defaultWhatsAppPhone: "962797440088",
  defaultWhatsAppPrefill:
    "السلام عليكم إدارة بنون كيدز — دلتا للصناعات البلاستيكية. بخصوص ",
  defaultEmails: ["sales@banoonkids.com"] as const,
  phones: ["962797440088", "962795711148", "962798707091", "96264029651"] as const,
  salesPhone: "962795711148",
  hoursAr: "الموقع يعلن تواصلاً هاتفياً على مدار الساعة — ساعات الدوام الداخلي غير منشورة",
  addressAr: "مدينة الملك عبدالله الثاني الصناعية، عمّان، الأردن",
  promiseAr: "شوكولاتة بلا مواد حافظة، لعبة تبقى، وعلبة تُعاد استخدامها",
  developer: {
    nameAr: "م. صهيب الصالح",
    phone: "962787523192",
    prefill: "بنون كيدز",
  },
} as const;

export function getDiscoveryFormUrl(): string {
  return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL");
}

export function getContactEmails(): string[] {
  const fromEnv = parseEmailList(readPublic("NEXT_PUBLIC_CONTACT_EMAILS"));
  if (fromEnv.length) return fromEnv;
  const single = readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
  if (single) {
    const parts = parseEmailList(single);
    if (parts.length) return parts;
  }
  return [...siteConfig.defaultEmails];
}

export function getMapsUrl(): string {
  return readPublic("NEXT_PUBLIC_MAPS_URL") || siteConfig.defaultMapsUrl;
}

export function getCompanyWebsiteUrl(): string {
  return readPublic("NEXT_PUBLIC_COMPANY_WEBSITE") || siteConfig.websiteUrl;
}

export function getWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_WHATSAPP_PHONE") || siteConfig.defaultWhatsAppPhone;
  return raw.replace(/[^\d]/g, "");
}

export function getWhatsAppPhoneDisplay(): string {
  const digits = getWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") || siteConfig.defaultWhatsAppPrefill
  );
}

export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  const text = `${getWhatsAppPrefill()}${extra}`.trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppQrValue(): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}`;
}

export function getDeveloperWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PHONE") || siteConfig.developer.phone;
  return raw.replace(/[^\d]/g, "");
}

export function getDeveloperWhatsAppPhoneDisplay(): string {
  const digits = getDeveloperWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getDeveloperWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PREFILL") ||
    siteConfig.developer.prefill
  );
}

export function getDeveloperWhatsAppUrl(): string {
  const phone = getDeveloperWhatsAppPhone();
  if (!phone) return "";
  const text = getDeveloperWhatsAppPrefill().trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getSiteUrl(): string {
  const fromEnv = readPublic("NEXT_PUBLIC_SITE_URL");
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/[^\d]/g, "");
  if (d.startsWith("962") && d.length === 12) {
    return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4, 8)} ${d.slice(8)}`;
  }
  if (d.startsWith("962") && d.length === 11) {
    return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4)}`;
  }
  return `+${d}`;
}

export function getSalesCallUrl(): string {
  return `tel:+${siteConfig.salesPhone}`;
}
