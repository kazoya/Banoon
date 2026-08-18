import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { salesScripts } from "@/data/scripts";

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="قناة الرياض والمدارس"
        description="المديرة تشتري هدوء الصف وصورة الأهل. ليست زبونة سوبرماركت."
      />
      <HonestyNote>لا قائمة مدارس حقيقية في هذا التصور. الاكتشاف يبدأ بعشر رياض في عمّان والزرقاء.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">لماذا تقبل المديرة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
          <p>1) المنتج ليس «سكاكر فقط» — بطاقة تعليمية ومونتيسوري كما يذكر الموقع.</p>
          <p>2) العلبة تبقى حصّالة في الصف: لا نفايات في ساحة المدرسة.</p>
          <p>3) المسابقة تُدار نيابة عنها: هي تظهر يوم الجائزة فقط.</p>
          <p>4) مصنع أردني يمكن زيارته في المدينة الصناعية.</p>
        </CardContent>
      </Card>
      <div className="grid gap-4">
        {salesScripts
          .filter((s) => s.audience.includes("روضة") || s.audience.includes("كافتيريا"))
          .map((script) => (
            <Card key={script.id} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{script.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
                <p>{script.opener}</p>
                <p>{script.ask}</p>
              </CardContent>
            </Card>
          ))}
      </div>
      <SalesCallBar extra="قناة المدارس — أرسل لي قائمة 10 رياض للتجريب" />
    </div>
  );
}
