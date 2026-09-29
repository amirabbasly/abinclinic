"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import {
  IconCalendar,
  IconCheck,
  IconPhone,
  IconSend,
  IconWhatsapp,
} from "./Icons";

type Status = "idle" | "sending" | "done";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 3) return setError("لطفاً نام و نام خانوادگی را کامل وارد کنید.");
    if (!/^09\d{9}$/.test(phone.replace(/\D/g, "")))
      return setError("شماره موبایل معتبر نیست (مثال: 09123456789).");
    if (!service) return setError("لطفاً خدمت موردنظر را انتخاب کنید.");
    setError("");
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1200);
  };

  const waText = encodeURIComponent(
    `سلام، درخواست رزرو نوبت از سایت کلینیک آبین:\n👤 نام: ${name}\n📱 شماره: ${phone}\n💠 خدمت: ${service}${note ? `\n📝 توضیحات: ${note}` : ""}`
  );

  if (status === "done") {
    return (
      <div className="rounded-[2rem] border border-mint/40 bg-gradient-to-b from-mint/10 to-ivory p-8 text-center shadow-card sm:p-10">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-mint to-[#4f8a6e] text-white shadow-card">
          <IconCheck className="size-8" />
        </span>
        <h3 className="mt-5 text-xl font-black text-ink">
          درخواست شما ثبت شد، {name.split(" ")[0]} عزیز 🌸
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-8 text-ink-soft">
          کارشناسان آبین در سریع‌ترین زمان (معمولاً کمتر از چند ساعت) با شماره‌ی
          شما تماس می‌گیرند. برای ثبت قطعی و سریع‌تر، درخواست را در واتساپ هم
          بفرستید:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`${site.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-sm font-black text-white shadow-card transition hover:scale-105 active:scale-95"
          >
            <IconWhatsapp className="size-5" />
            ارسال درخواست در واتساپ
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-black text-white shadow-card transition hover:scale-105 active:scale-95"
          >
            <IconPhone className="size-5 text-gold" />
            تماس مستقیم
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setName("");
              setPhone("");
              setService("");
              setNote("");
            }}
            className="rounded-full border-2 border-ink/15 px-7 py-3.5 text-sm font-black text-ink transition hover:bg-white active:scale-95"
          >
            ثبت درخواست جدید
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-rose/15 bg-ivory p-6 shadow-soft sm:p-8"
    >
      <h3 className="flex items-center gap-2.5 text-lg font-black text-ink">
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-rose to-rose-deep text-white">
          <IconCalendar className="size-5" />
        </span>
        فرم رزرو مشاوره و نوبت
      </h3>
      <p className="mt-2 text-xs leading-6 text-ink-soft">
        فرم را پر کنید؛ کارشناسان آبین برای هماهنگی سانس با شما تماس می‌گیرند.
        مشاوره‌ی اولیه رایگان است.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-ink">نام و نام خانوادگی *</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثلاً: سارا محمدی"
            className="h-12 w-full rounded-2xl border border-rose/20 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink-soft/40 focus:border-rose focus:ring-4 focus:ring-rose/10"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-ink">شماره موبایل *</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
            dir="ltr"
            placeholder="09xxxxxxxxx"
            className="h-12 w-full rounded-2xl border border-rose/20 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink-soft/40 focus:border-rose focus:ring-4 focus:ring-rose/10"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold text-ink">خدمت موردنظر *</span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-12 w-full rounded-2xl border border-rose/20 bg-white px-4 text-sm text-ink outline-none transition focus:border-rose focus:ring-4 focus:ring-rose/10"
          >
            <option value="">انتخاب کنید…</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="مشاوره هوشمند">مشاوره هوشمند (نمی‌دانم کدام خدمت)</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold text-ink">توضیحات (اختیاری)</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="مثلاً: ترجیح می‌دهم جلسه بعدازظهر باشد…"
            className="w-full resize-none rounded-2xl border border-rose/20 bg-white p-4 text-sm leading-7 text-ink outline-none transition placeholder:text-ink-soft/40 focus:border-rose focus:ring-4 focus:ring-rose/10"
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-rose-soft px-4 py-2.5 text-xs font-bold text-rose-deep">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-rose to-rose-deep py-4 font-black text-white shadow-card transition hover:shadow-glow active:scale-[0.98] disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            در حال ثبت درخواست…
          </>
        ) : (
          <>
            <IconSend className="size-5 -scale-x-100" />
            ثبت درخواست رزرو
          </>
        )}
      </button>
      <p className="mt-3 text-center text-[11px] text-ink-soft">
        اطلاعات شما محرمانه است و فقط برای هماهنگی نوبت استفاده می‌شود.
      </p>
    </form>
  );
}
