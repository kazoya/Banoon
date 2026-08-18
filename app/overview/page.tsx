import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const layers = [
  {
    title: "ما نعرفه علناً",
    items: [
      `${siteConfig.parentAr} منذ ${siteConfig.since}`,
      "علامة بنون: ميغو، كيدو، معجون، تشامبيون",
      "مدينة الملك عبدالله الثاني الصناعية — عمّان",
      "إعادة استخدام العلبة حصّالة/طعام/كوب",
      "واتساب وبريد المبيعات حسب توجيه الإدارة",
    ],
  },
  {
    title: "ما لا نعرفه بعد",
    items: [
      "طاقة الخطوط وأصل الشوكولاتة",
      "ملف مخبري لخلو المواد الحافظة",
      "خريطة الموزّعين",
      "هل جُرّبت رياض سابقاً",
      "من يدير الووردبريس",
    ],
  },
  {
    title: "ماذا نقترح",
    items: [
      "إصلاح الموقع بالعربية",
      "مسابقة 12 روضة تجريبية",
      "التقاط طلب واتساب",
      "رسائل مديرة جاهزة",
      "اعتماد بشري للجوائز والأسعار",
    ],
  },
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="Executive brief"
        title="تصور تنفيذي: المصنع يبيع للمديرة لا للرف فقط"
        description="الإدارة ترى دلتا كصانع وبنون كقناة ثقة. ليست كتالوج صور ولا أرقام مخترعة."
      />
      <HonestyNote>
        صفحة الإحصاءات على الموقع تعرض أصفاراً. لن نختلق «سنوات خبرة» أو «دول تصدير» حتى تُملأ من الإدارة.
      </HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer) => (
          <Card key={layer.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{layer.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pr-4 text-sm leading-7 text-muted-foreground">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
      <SalesCallBar extra="التصور التنفيذي — أريد تجريب 12 روضة" />
      <div className="flex flex-wrap gap-2">
        <Button asChild className="cursor-pointer">
          <Link href="/contests">المسابقات</Link>
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/assessment">الاكتشاف</Link>
        </Button>
      </div>
    </div>
  );
}
