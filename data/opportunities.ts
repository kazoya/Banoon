import type { OpportunityCard } from "@/types";

export const automationOpportunities: OpportunityCard[] = [
  {
    id: "a1",
    title: "مسابقة مدارس تُدار من واتساب",
    summary:
      "تسجيل روضة، عدّ أغلفة، واقتراح جائزة. الإعلان والشحن لا يتمّان إلا بعد اعتماد مدير المبيعات.",
    impact: "high",
    requiredData: ["قائمة مدارس", "رموز العبوات", "ميزانية جوائز"],
    difficulty: "low",
    dependencies: ["مبيعات", "تعبئة"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a2",
    title: "التقاط طلب واتساب",
    summary:
      "استخراج الصنف والكمية والجهة (موزّع / كافتيريا / روضة) من الرسالة ثم طابور تسعير.",
    impact: "high",
    requiredData: ["سجل واتساب", "قائمة أسعار"],
    difficulty: "low",
    dependencies: ["مبيعات"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a3",
    title: "رسائل جاهزة لمديرة الروضة",
    summary:
      "نص عربي قصير: بلا مواد حافظة، علبة تبقى حصّالة، ومسابقة الصف. المدير يضغط إرسال بعد المراجعة.",
    impact: "high",
    requiredData: ["اعتماد الادعاء المخبري", "صور منتجات حقيقية"],
    difficulty: "low",
    dependencies: ["جودة", "تسويق"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a4",
    title: "اكتمال كتالوج الموقع بالعربية",
    summary:
      "الموقع الحالي إنجليزي، فيه أخطاء إملائية، وإحصاءات صفر، ونصوص مكررة بين الأصناف.",
    impact: "medium",
    requiredData: ["نشرات داخلية لكل صنف"],
    difficulty: "low",
    dependencies: ["تسويق"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a5",
    title: "تتبع كراتين الكافتيريا",
    summary: "كل مدرسة بطاقة: آخر طلب، المرتجع، ومخزون الكافتيريا التقريبي حتى لا تنقطع المسابقة.",
    impact: "high",
    requiredData: ["فواتير", "أسماء منسّقات"],
    difficulty: "medium",
    dependencies: ["محاسبة", "مبيعات"],
    pilotFit: "possible",
    readiness: "needs_history",
  },
];

export const aiOpportunities: OpportunityCard[] = [
  {
    id: "i1",
    title: "صياغة رسالة واتساب حسب نوع الجهة",
    summary:
      "روضة ≠ سوبرماركت ≠ موزّع. النموذج يقترح نصاً من حقائق معتمدة: إعادة الاستخدام، التعلّم، وغياب المواد الحافظة إن وثّقتها الجودة.",
    impact: "high",
    requiredData: ["حقائق معتمدة", "جمهور"],
    difficulty: "low",
    dependencies: ["مبيعات"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "i2",
    title: "بطاقات تعليمية مرتبطة بالمسابقة",
    summary: "كل رمز يفتح سؤالاً بسيطاً (حرف، عدد، لون). لا اختراع منهج مونتيسوري كامل دون معلمة.",
    impact: "medium",
    requiredData: ["مكتبة بطاقات حالية"],
    difficulty: "medium",
    dependencies: ["تعليم", "تعبئة"],
    pilotFit: "possible",
    readiness: "needs_history",
  },
  {
    id: "i3",
    title: "اكتشاف الطلبات الناقصة",
    summary: "إذا توقفت روضة نشطة أسبوعين يقترح النظام مكالمة. لا خصم تلقائي.",
    impact: "high",
    requiredData: ["تاريخ طلبات"],
    difficulty: "medium",
    dependencies: ["CRM"],
    pilotFit: "possible",
    readiness: "needs_history",
  },
];
