import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const uses = [
  { title: "حصّالة", text: "بعد الشوكولاتة تبقى البيضة على الرف. الطفل يتعلم الادّخار — جملة يفهمها الأب فوراً." },
  { title: "علبة طعام", text: "الموقع يذكر إعادة الاستخدام كعلبة غداء. في الروضة: لا بلاستيك يُرمى بعد الحصة." },
  { title: "كوب عصير", text: "شكل جذاب بألوان الأطفال. الاستخدام الثالث يقلل اعتراض «بلاستيك لمرة واحدة»." },
];

export default function ReusePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="العلبة التي تبقى" description="الاستدامة هنا ليست شعاراً أخضر. هي سبب بقاء العلامة في غرفة الطفل." demo={false} />
      <HonestyNote>آراء الأهل على الموقع تذكر الحصّالة والكوب وعلبة الطعام كسبب للتعلق بالمنتج.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {uses.map((use) => (
          <Card key={use.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{use.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{use.text}</CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra="إعادة الاستخدام — أريد صوراً حقيقية لحصّالات أطفال" />
    </div>
  );
}
