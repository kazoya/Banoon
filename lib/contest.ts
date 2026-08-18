import type { ContestProposal, ContestSchool } from "@/types";

export const WRAPPER_PRIZE_THRESHOLD = 80;
export const CARTON_NUDGE_THRESHOLD = 8;

export function proposeContest(school: ContestSchool): ContestProposal {
  if (school.wrappers >= WRAPPER_PRIZE_THRESHOLD && school.status !== "نشطة") {
    return {
      schoolId: school.id,
      action: "prize",
      prize: school.type === "روضة" ? "ركن ألعاب صفّي + شهادات للأطفال" : "يوم ترفيهي + مخزون كافتيريا مخفّض",
      reasons: [
        `جُمع ${school.wrappers} غلاف/رمز — فوق عتبة الجائزة التجريبية ${WRAPPER_PRIZE_THRESHOLD}.`,
        "الجائزة لا تُعلن ولا تُشحن إلا بعد اعتماد مدير المبيعات.",
      ],
      requiresApproval: true,
    };
  }
  if (school.lastOrderCartons < CARTON_NUDGE_THRESHOLD) {
    return {
      schoolId: school.id,
      action: "nudge",
      prize: "تذكير منسّقة المسابقة بطلب الكراتين الناقصة",
      reasons: [
        `آخر طلب ${school.lastOrderCartons} كرتون — أقل من حد التفعيل التجريبي.`,
        "الرسالة تُقترح هنا، والإرسال يبقى بشرياً من واتساب المبيعات.",
      ],
      requiresApproval: true,
    };
  }
  return {
    schoolId: school.id,
    action: "hold",
    prize: "الاستمرار في العدّ دون جائزة هذا الأسبوع",
    reasons: ["المشاركة جيدة والطلب منتظم. لا مكافأة مبكرة حتى لا تُفرَّغ الميزانية."],
    requiresApproval: true,
  };
}
