import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contestSchools } from "@/data/contests";

export default function CrmPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="العملاء والطلبات" description="بطاقة لكل روضة وموزّع: آخر كرتون، المنسّقة، وحالة المسابقة." />
      <HonestyNote>الصفوف أدناه من بيانات تجريبية للمسابقة. ليست قاعدة عملاء دلتا.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-3">
        <KpiCard label="جهات تجريبية" value={contestSchools.length} hint="رياض + مدارس" />
        <KpiCard label="أغلفة المجموعة" value={contestSchools.reduce((s, x) => s + x.wrappers, 0)} />
        <KpiCard label="كراتين آخر طلب" value={contestSchools.reduce((s, x) => s + x.lastOrderCartons, 0)} />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">طابور المتابعة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-7">
          {contestSchools.map((school) => (
            <p key={school.id} className="border-b border-dashed pb-2">
              <span className="font-medium">{school.name}</span> — {school.coordinator} — {school.status}
            </p>
          ))}
        </CardContent>
      </Card>
      <SalesCallBar extra="CRM — أريد إدخال موزّعينا الحقيقيين" />
    </div>
  );
}
