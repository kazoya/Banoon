import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPhoneDisplay, getCompanyWebsiteUrl, getContactEmails, siteConfig } from "@/lib/config";

export default function ContactPage() {
  const website = getCompanyWebsiteUrl();
  const emails = getContactEmails();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="تواصل معنا"
        description="أرقام الموقع + واتساب وبريد مدير المبيعات كما طُلب لهذا التصور."
        demo={false}
      />
      <HonestyNote>
        صفحة الاتصال في الموقع لا تعرض بريداً واضحاً ونموذجها يظهر رمزاً فارغاً. نستخدم sales@banoonkids.com كما زُوّد هنا.
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">بنون كيدز — دلتا للصناعات البلاستيكية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7">
          <p>{siteConfig.addressAr}</p>
          <p>{siteConfig.hoursAr}</p>
          <p className="font-medium">واتساب المبيعات (معتمد لهذا التصور)</p>
          <p dir="ltr">
            <a className="text-copper underline-offset-4 hover:underline" href={`tel:+${siteConfig.defaultWhatsAppPhone}`}>
              {formatPhoneDisplay(siteConfig.defaultWhatsAppPhone)}
            </a>
          </p>
          <p className="font-medium">هاتف إضافي</p>
          <p dir="ltr">
            <a className="text-copper underline-offset-4 hover:underline" href={`tel:+${siteConfig.salesPhone}`}>
              {formatPhoneDisplay(siteConfig.salesPhone)}
            </a>
          </p>
          <p className="font-medium">أرقام صفحة الاتصال في الموقع</p>
          {siteConfig.phones
            .filter((p) => p !== siteConfig.defaultWhatsAppPhone && p !== siteConfig.salesPhone)
            .map((p) => (
              <p key={p} dir="ltr">
                <a className="text-copper underline-offset-4 hover:underline" href={`tel:+${p}`}>
                  {formatPhoneDisplay(p)}
                </a>
              </p>
            ))}
          {emails.map((email) => (
            <p key={email} dir="ltr">
              <a className="text-copper underline-offset-4 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          ))}
          <a href={website} className="text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            {website}
          </a>
        </CardContent>
      </Card>
      <SalesCallBar extra="تواصل — أريد بدء التجريب" />
      <WhatsAppQr />
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{siteConfig.developer.nameAr}</CardTitle>
        </CardHeader>
        <CardContent>
          <DeveloperQr />
        </CardContent>
      </Card>
    </div>
  );
}
