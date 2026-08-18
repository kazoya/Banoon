"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  channelOptions,
  defaultAssessment,
  loadAssessment,
  saveAssessment,
  systemOptions,
  type AssessmentValues,
} from "@/lib/assessment";

const steps = ["المصنع والجودة", "المبيعات والتوزيع", "المدارس والمسابقة"];

export function DiscoveryForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const form = useForm<AssessmentValues>({ defaultValues: defaultAssessment });

  useEffect(() => {
    form.reset(loadAssessment());
  }, [form]);

  const values = form.watch();

  function persist() {
    saveAssessment(form.getValues());
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="تقييم اكتشاف بنون" description="أسئلة المصنع والمبيعات والمدارس. يُحفظ في هذا المتصفح فقط." demo={false} />
      <HonestyNote>الحقول الفارغة تبقى «غير معروف». لا نملأ طاقة إنتاج أو شهادات من عندنا.</HonestyNote>
      <p className="text-sm text-muted-foreground">
        القسم {step + 1} من {steps.length}: {steps[step]}
      </p>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{steps[step]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 0 ? (
            <>
              <Field label="خطوط الإنتاج الحالية (بيضة / معجون / أصناف أخرى)" name="lines" register={form.register} />
              <Field label="مصدر الشوكولاتة والحلوى" name="chocolateSource" register={form.register} />
              <Field label="هل خلو المنتج من المواد الحافظة موثّق مخبرياً؟" name="preservativeClaim" register={form.register} />
              <Field label="كيف يتم الإفراج قبل الشحن؟" name="qaRelease" register={form.register} />
            </>
          ) : null}
          {step === 1 ? (
            <>
              <p className="text-sm text-muted-foreground">قنوات الطلب</p>
              <CheckList
                options={channelOptions}
                selected={values.orderChannels}
                onToggle={(item) => form.setValue("orderChannels", toggle(values.orderChannels, item))}
              />
              <Field label="من يعتمد سعر الجملة؟" name="priceOwner" register={form.register} />
              <Field label="خريطة الموزّعين اليوم" name="distributorMap" register={form.register} />
              <Field label="من يرد على واتساب المبيعات؟" name="whatsappOwner" register={form.register} />
              <Field label="من يدير الموقع الإلكتروني؟" name="websiteOwner" register={form.register} />
              <p className="text-sm text-muted-foreground">الأنظمة</p>
              <CheckList
                options={systemOptions}
                selected={values.systems}
                onToggle={(item) => form.setValue("systems", toggle(values.systems, item))}
              />
            </>
          ) : null}
          {step === 2 ? (
            <>
              <Field label="هل توجد قناة رياض/مدارس اليوم؟" name="schoolChannel" register={form.register} />
              <Field label="هل أُجريت مسابقات سابقاً؟" name="contestToday" register={form.register} />
              <div className="space-y-2">
                <Label htmlFor="notes">ملاحظات</Label>
                <Textarea id="notes" rows={4} {...form.register("notes")} />
              </div>
            </>
          ) : null}
        </CardContent>
      </Card>
      <div className="flex justify-between gap-2">
        <Button type="button" variant="outline" className="cursor-pointer" disabled={step === 0} onClick={() => { persist(); setStep((s) => s - 1); }}>
          السابق
        </Button>
        <div className="flex gap-2">
          <Button type="button" variant="secondary" className="cursor-pointer" onClick={() => { persist(); toast.success("حُفظ التقدم"); }}>
            حفظ
          </Button>
          {step < steps.length - 1 ? (
            <Button type="button" className="cursor-pointer" onClick={() => { persist(); setStep((s) => s + 1); }}>
              التالي
            </Button>
          ) : (
            <Button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                persist();
                toast.success("تم حفظ التقييم");
                router.push("/assessment/results");
              }}
            >
              عرض الملخص
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function toggle(list: string[], item: string) {
  return list.includes(item) ? list.filter((v) => v !== item) : [...list, item];
}

function Field({
  label,
  name,
  register,
}: {
  label: string;
  name: keyof AssessmentValues;
  register: ReturnType<typeof useForm<AssessmentValues>>["register"];
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...register(name)} />
    </div>
  );
}

function CheckList({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {options.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Checkbox checked={selected.includes(item)} onCheckedChange={() => onToggle(item)} id={item} />
          <Label htmlFor={item} className="cursor-pointer font-normal">
            {item}
          </Label>
        </li>
      ))}
    </ul>
  );
}
