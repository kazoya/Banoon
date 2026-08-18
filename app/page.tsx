import Link from "next/link";
import { ArrowLeft, Egg, Globe2, GraduationCap, ShieldCheck, Trophy } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, siteConfig } from "@/lib/config";

const pillars = [
  {
    title: "بلا مواد حافظة",
    text: "وعد المبيعات الذي تسمعه المديرة في أول عشر ثوانٍ: الشوكولاتة ألذ لأنها أنظف. يُثبَّت بورقة جودة قبل أي منشور.",
  },
  {
    title: "مسابقة الصف",
    text: "الأغلفة تتحول نقاطاً، والنقاط جائزة أمام الأطفال. الكافتيريا تطلب لأنها صارت جزءاً من الطابور لا من الرف المنسي.",
  },
  {
    title: "العلبة تبقى",
    text: "حصّالة أو علبة طعام أو كوب عصير. الأم لا ترمي البلاستيك، والمصنع الأردني يظهر في غرفة الطفل كل يوم.",
  },
];

export default function HomePage() {
  const website = getCompanyWebsiteUrl();
  return (
    <div className="candy-glow play-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-primary px-5 py-8 text-primary-foreground shadow-lg sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-gold/70 bg-white p-2">
            <BrandLogo alt={siteConfig.nameAr} priority />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              {siteConfig.parentAr} · {siteConfig.cityDetailAr} · منذ {siteConfig.since}
            </p>
            <h1 className="mt-2 font-heading text-[1.65rem] font-bold text-balance sm:text-4xl">
              بعد أن ترى المديرة المسابقة، تتصل هي — أو تتصل أنت في نفس اليوم
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
              {siteConfig.nameAr} علامة أطفال من {siteConfig.parentAr}. هذا التصور يعطي مدير المبيعات أداة يغلق بها صفقة روضة:
              شوكولاتة بلا مواد حافظة، لعبة تعليمية، وعلبة لا تُرمى — ثم مسابقة جوائز تُدار وأنت فقط تعتمد الفائز.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-gold">إلى عناية {siteConfig.recipient}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href={website} target="_blank" rel="noreferrer" className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 hover:underline">
            <Globe2 className="size-3.5" /> banoonkids.com
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="cursor-pointer bg-ochre text-primary hover:bg-gold">
            <Link href="/contests">
              آلية مسابقة المدارس <ArrowLeft />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/marketing">رسائل تُغلق الصفقة</Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto -mt-5 grid max-w-5xl gap-3 px-1 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item.title} className="prize-panel rounded-2xl px-4 py-5 shadow-md">
            <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/95">{item.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-8 max-w-5xl">
        <HonestyNote>
          أرقام المدارس والكراتين داخل المنصة تجريبية. موقع بنون الحالي إنجليزي وفيه إحصاءات صفر ونصوص مكررة — نذكر ذلك كفرصة لا كهجوم.
        </HonestyNote>
      </section>
      <section className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
        <NextCard href="/quality" icon={ShieldCheck} title="الجودة والطعم" text="بلا مواد حافظة، ألوان غذائية، معجون قمح، وخامات يعلن الموقع اعتمادها." />
        <NextCard href="/schools" icon={GraduationCap} title="قناة الرياض" text="المديرة ليست أماً في السوبرماركت. لها جملة وجائزة وواتساب واحد." />
        <NextCard href="/products" icon={Egg} title="كتالوج ميغو وكيدو" text="ما هو منشور، وما هو رقيق، وما هو «قريباً» دون اختراع." />
      </section>
      <section className="mx-auto mt-6 max-w-5xl rounded-2xl border bg-card p-5">
        <Trophy className="size-4 text-copper" />
        <h2 className="mt-2 font-heading text-xl font-semibold">لماذا المسابقة هنا وليست لوحة منتجات فقط؟</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          البيضة تُشترى مرة. المسابقة تُعيد الكرتون كل أسبوع. مدير المبيعات لا يحتاج كتالوجاً أجمل من المنافس المستورد —
          يحتاج يوماً يقف فيه أمام الأطفال وهو يسلّم الجائزة، والأهل يصوّرون، والكافتيريا تطلب. هذا التصور يبني ذلك اليوم، ويترك الاعتماد بشرياً.
        </p>
      </section>
      <section className="mx-auto mt-6 max-w-5xl">
        <SalesCallBar extra="شاهدت منصة بنون وأريد بدء مسابقة رياض هذا الأسبوع" />
      </section>
    </div>
  );
}

function NextCard({ href, icon: Icon, title, text }: { href: string; icon: typeof Trophy; title: string; text: string }) {
  return (
    <Link href={href} className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm hover:border-gold/50">
      <Icon className="size-4 text-copper" />
      <p className="mt-2 font-medium">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </Link>
  );
}
