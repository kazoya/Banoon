"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contestSchools } from "@/data/contests";
import { getWhatsAppUrl } from "@/lib/config";
import { proposeContest } from "@/lib/contest";

export function ContestBoard() {
  const [selected, setSelected] = useState(contestSchools[0]?.id ?? "");
  const school = useMemo(
    () => contestSchools.find((item) => item.id === selected) ?? contestSchools[0],
    [selected],
  );
  const proposal = school ? proposeContest(school) : null;

  return (
    <div className="space-y-4">
      <HonestyNote>
        أسماء المدارس والأرقام تجريبية لتوضيح الآلية. لا تُعلن جائزة حقيقية من هذا اللوح.
      </HonestyNote>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الرياض والمدارس في الدورة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {contestSchools.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item.id)}
                className={`flex w-full cursor-pointer flex-col rounded-xl border px-3 py-3 text-right text-sm ${
                  item.id === selected ? "border-gold bg-accent" : "hover:border-gold/40"
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {item.type} · {item.city} · {item.wrappers} غلاف · {item.lastOrderCartons} كرتون
                </span>
              </button>
            ))}
          </CardContent>
        </Card>
        {school && proposal ? (
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                <Badge>{school.status}</Badge>
                <Badge variant="outline">{proposal.action === "prize" ? "جائزة مقترحة" : proposal.action === "nudge" ? "تذكير طلب" : "انتظار"}</Badge>
              </div>
              <CardTitle className="text-base">{school.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7">
              <p>المنسّقة: {school.coordinator}</p>
              <p className="font-medium text-foreground">{proposal.prize}</p>
              <ul className="list-disc space-y-1 pr-4 text-muted-foreground">
                {proposal.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => toast.success("اقتراح معلّق بانتظار اعتماد مدير المبيعات — لم يُعلن شيء")}
                >
                  اعتماد بشري
                </Button>
                <Button type="button" variant="outline" className="cursor-pointer" onClick={() => toast.message("رُفض الإعلان هذا الأسبوع")}>
                  إيقاف
                </Button>
                <Button asChild variant="secondary" className="cursor-pointer">
                  <a href={getWhatsAppUrl(`مسابقة ${school.name}`)} target="_blank" rel="noreferrer">
                    واتساب المنسّقة عبر المبيعات
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </div>
      <HumanInTheLoop note="الجائزة لحظة تسويقية. إن أُعلنت قبل الاعتماد تتحول إلى دين على المصنع." />
      <SalesCallBar extra="أريد تشغيل مسابقة رياض الأطفال هذا الأسبوع" />
    </div>
  );
}
