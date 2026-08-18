import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "مونتيسوري كما يذكر الموقع",
    text: "بنون تقدم نفسها كإعداد جيل موهوب بطريقة مونتيسوري. في البيع المدرسي نترجم ذلك إلى: الطفل يلمس، يعدّ، يلصق بطاقة، ثم يأكل. لا ندّعي منهجاً بديلاً عن المعلمة.",
  },
  {
    title: "ما قبل القراءة والمفردات",
    text: "ميغو تويز على الموقع يربط البيضة بمهارات ما قبل القراءة. البطاقة التعليمية داخل العبوة هي جسر المديرة: «هذا ليس سكاكر الطابور».",
  },
  {
    title: "حساب بسيط داخل المسابقة",
    text: "عدّ الأغلفة نفسه تمرين عدد. الشوكولاتة «تحسّن الرياضيات» عبارة تسويقية على الموقع — نستخدم العدّ الحقيقي لا الادعاء الطبي.",
  },
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="تعلّم باللعب" description="الموقع يضع التعليم بجانب المتعة. المسابقة تجعل التعليم مرئياً لإدارة المدرسة." demo={false} />
      <HonestyNote>لا نؤلف بطاقات غير موجودة. نبني المسابقة على البطاقة واللعبة اللتين داخل العبوة اليوم.</HonestyNote>
      {items.map((item) => (
        <Card key={item.title} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
        </Card>
      ))}
      <SalesCallBar extra="الجانب التعليمي — أريد نموذجاً لبطاقة صفّية" />
    </div>
  );
}
