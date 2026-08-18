import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "الموقع لا يبيع ولا يُقنع بالعربية",
    department: "marketing",
    description:
      "banoonkids.com بالإنجليزية، فيه Surprice/Toyes، وإحصاءات 0، ونموذج تواصل يظهر رمزاً فارغاً، وبريد غير ظاهر في صفحة الاتصال.",
    signalToInvestigate: "من يدير الووردبريس؟ هل يوجد عربي جاهز لم يُرفع؟",
  },
  {
    id: "b2",
    title: "مدير المبيعات هو النظام",
    department: "sales",
    description:
      "ثلاثة أرقام هواتف وواتساب واحد معلن. أي طلب مدرسة أو موزّع يمر من الدردشة. لا طابور ظاهر ولا متابعة انقطاع.",
    signalToInvestigate: "كم رسالة يومياً تُنسى بعد الساعة 5؟",
  },
  {
    id: "b3",
    title: "الكتالوج مكرر",
    department: "marketing",
    description:
      "معظم أصناف صفحة المنتجات تحمل فقرة ميغو نفسها. الموزّع والمديرة لا يجدان فرقاً بين كيدو وتشامبيون.",
    signalToInvestigate: "نشرات داخلية أو صور خط التعبئة لكل SKU.",
  },
  {
    id: "b4",
    title: "ادعاء السلامة غير مربوط بنشرة",
    department: "quality",
    description:
      "الموقع يذكر موافقة FDA للخامات، وألواناً غذائية للمعجون، وقمحاً. خلو الشوكولاتة من المواد الحافظة — وهو وعد المبيعات الأقوى — غير مكتوب بوضوح على الصفحة الرئيسية.",
    signalToInvestigate: "شهادة مختبر + صياغة قانونية قصيرة للأهل والمديرات.",
  },
  {
    id: "b5",
    title: "لا قناة مدارس",
    department: "schools",
    description:
      "المنتج مثالي للكافتيريا والهدية الصفّية، لكن الموقع لا يخاطب المديرة ولا يشرح مسابقة ولا يعرض آلية جائزة.",
    signalToInvestigate: "هل جُرّبت زيارات رياض سابقاً؟ أين قائمة الأسماء؟",
  },
  {
    id: "b6",
    title: "سوبر هيرو معلن بلا موعد",
    department: "production",
    description: "«Coming Soon ...............» يضعف الثقة إن بقي سنوات.",
    signalToInvestigate: "هل الصنف في القالب أم فكرة مؤجلة؟",
  },
];
