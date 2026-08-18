import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const claims = [
  {
    title: "بلا مواد حافظة",
    text: "هذه أقوى جملة في مكالمة المديرة: الطفل يأكل شوكولاتة لا تُحفظ كيميائياً لتبقى على الرف شهوراً بلا طعم. الألذ لأنها أقرب للمكوّن لا للمادة المضافة. الجملة لا تخرج في واتساب عام حتى توقّعها الجودة.",
  },
  {
    title: "معجون قمح وألوان غذائية",
    text: "الموقع يصرّح بمعجون قمح وألوان food-grade. هذا يطمئن المعلمة التي تخشى أن يضع الطفل المعجون في فمه أثناء النشاط.",
  },
  {
    title: "خامات معتمدة",
    text: "الموقع يذكر مواداً عالية الجودة وموافقة إدارة الغذاء والدواء. الملف نفسه غير مرفوع — نطلبه في الاكتشاف قبل طباعة بروشور المدارس.",
  },
];

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Trust"
        title="الألذ عالمياً في فم الطفل الأردني — إن صدقت المختبر"
        description="التسويق المقنع لا يبالغ في الجوائز الدولية. يربط الطعم بغياب الحافظة، واللعب بالأمان، والمصنع بالأردن."
        demo={false}
      />
      <HonestyNote>
        «بلا مواد حافظة» توجيه مبيعات لهذه المنصة. الموقع الحالي يبرز السلامة والمعجون أكثر من هذه الجملة. لا تُطبع على الكرتون قبل الاعتماد.
      </HonestyNote>
      <div className="grid gap-4">
        {claims.map((claim) => (
          <Card key={claim.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{claim.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{claim.text}</CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop note="أي ادعاء غذائي يمر على الجودة قبل المبيعات وقبل المديرة." />
      <SalesCallBar extra="أريد ورقة الجودة لخلو المواد الحافظة لأرسلها للرياض" />
    </div>
  );
}
