import { ContestBoard } from "@/components/contests/contest-board";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contestRules } from "@/data/contests";

export default function ContestsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="School engine"
        title="مسابقة بنون: الأغلفة تُعدّ — الجائزة لا تُعلن إلا بعدك"
        description="آلية واقعية لرياض الأطفال والمدارس. المدير يعتمد، المنسّقة تعدّ، والكافتيريا تطلب."
        demoLabel="مدارس تجريبية"
      />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {contestRules.map((rule) => (
          <Card key={rule.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{rule.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{rule.text}</CardContent>
          </Card>
        ))}
      </div>
      <ContestBoard />
    </div>
  );
}
