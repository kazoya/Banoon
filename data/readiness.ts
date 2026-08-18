import type { ReadinessRow } from "@/types";

export const readiness: ReadinessRow[] = [
  {
    source: "موقع بنون",
    exists: "yes",
    digital: "yes",
    structured: "partial",
    historicalDepth: "صفحات حالية — إحصاءات صفر",
    api: "no",
    aiReadiness: "ضعيف حتى تُصلح النصوص العربية والنشرات",
  },
  {
    source: "واتساب المبيعات",
    exists: "yes",
    digital: "yes",
    structured: "no",
    historicalDepth: "غير معروف",
    api: "unknown",
    aiReadiness: "جاهز لأتمتة التقاط الطلب بعد موافقة الرقم",
  },
  {
    source: "قائمة المدارس/الرياض",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "غير معروف",
    api: "no",
    aiReadiness: "أول اكتشاف ميداني",
  },
  {
    source: "شهادات الجودة والمكونات",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "FDA مذكورة على الموقع دون ملف",
    api: "no",
    aiReadiness: "لا تُنشر جملة «بلا مواد حافظة» قبل الملف",
  },
  {
    source: "أسعار الموزّعين",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "غير معروف",
    api: "no",
    aiReadiness: "التسعير يبقى بشرياً",
  },
];
