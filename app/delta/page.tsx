import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function DeltaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Parent company"
        title="دلتا تصنع — بنون تُحب"
        description="العلامة التي يراها الطفل تابعة لمصنع بلاستيك أردني يعمل منذ 1990."
        demo={false}
      />
      <HonestyNote>
        الربط بين دلتا وبنون معلن في تعريف الشركة على لينكدإن ومنشورات «صنع في الأردن». التفاصيل المالية لمجموعة شودري غير مطلوبة هنا.
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{siteConfig.parentAr}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
          <p>
            دلتا للصناعات البلاستيكية مصنع في عمّان. بنون كيدز وجهها للأطفال: بيض مفاجأة، ألعاب، معجون، وشوكولاتة داخل عبوة
            صُممت لتبقى بعد الأكل.
          </p>
          <p>
            هذه الجملة تُغلق نصف الاعتراض في غرفة المديرة: «لستم وكلاء صنف مستورد مجهول. أنتم مصنع أردني في مدينة الملك
            عبدالله الثاني الصناعية».
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>منذ {siteConfig.since}</Badge>
            <Badge variant="outline">عمّان</Badge>
            <Badge variant="secondary">صنع في الأردن</Badge>
          </div>
        </CardContent>
      </Card>
      <SalesCallBar extra="دلتا وبنون — أريد زيارة المصنع مع مديرة روضة" />
    </div>
  );
}
