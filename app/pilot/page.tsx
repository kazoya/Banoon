import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = [
  { t: "الأسبوع 1", d: "ورقة جودة لخلو المواد الحافظة + صور حقيقية لكل SKU + تصحيح أرقام الموقع الصفرية." },
  { t: "الأسبوع 2", d: "قائمة 12 روضة في عمّان والزرقاء. رسالة واتساب موحّدة. موافقة مديرة واحدة مكتوبة." },
  { t: "الأسبوع 3–4", d: "تشغيل العدّ. جائزة واحدة معتمدة تُسلَّم أمام الأطفال. تصوير الأهل بموافقة." },
  { t: "الشهر 2", d: "التقاط طلب واتساب. نشرات عربية لكيدو وتشامبيون. إيقاف الأصناف الرقيقة من البيع المؤسسي حتى تكتمل." },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="خطة التنفيذ" description="تجريب ضيق يمكن لمدير المبيعات قيادته بنفسه." demo={false} />
      <HonestyNote>الخطة مقترح نقاش. المواعيد النهائية تُحدَّد بعد التقييم.</HonestyNote>
      {weeks.map((week) => (
        <Card key={week.t} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{week.t}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{week.d}</CardContent>
        </Card>
      ))}
      <SalesCallBar extra="خطة التنفيذ — نبدأ الأسبوع الأول بورقة الجودة" />
    </div>
  );
}
