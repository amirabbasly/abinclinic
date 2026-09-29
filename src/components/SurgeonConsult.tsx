"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { IconArrowLeft, IconCheck, IconPhone, IconRobot, IconWhatsapp } from "./Icons";

// ─── پایگاه دانش جراح هوشمند ───
type Rec = {
  title: string;
  why: string;
  sessions: string;
  downtime: string;
  price: string;
  minBudget: 1 | 2 | 3 | 4;
  tags: ("natural" | "lasting" | "quick" | "minimal")[];
  for: ("خفیف" | "متوسط" | "زیاد")[];
};

const recs: Record<string, Rec[]> = {
  face: [
    {
      title: "مزوتراپی + هیدرودرم ابریژن",
      why: "برای افتادگی خفیف، آبرسانی و تحریک کلاژن بهترین شروع است؛ درخشش از همان جلسه اول دیده می‌شود.",
      sessions: "۳ جلسه با فاصله ۲ هفته",
      downtime: "بدون نقاهت",
      price: "۱٫۲ تا ۳ میلیون تومان",
      minBudget: 1,
      tags: ["natural", "quick", "minimal"],
      for: ["خفیف"],
    },
    {
      title: "بوتاکس پیشانی و خط خنده",
      why: "خطوطی که هنوز عمیق نشده‌اند با بوتاکس کاملاً محو می‌شوند و از عمیق‌تر شدن جلوگیری می‌کند.",
      sessions: "۱ جلسه",
      downtime: "بدون نقاهت",
      price: "۲ تا ۳٫۵ میلیون تومان",
      minBudget: 2,
      tags: ["quick", "minimal", "natural"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "لیفت با نخ PDO",
      why: "افتادگی متوسط گونه و خط فک را بدون جراحی بالا می‌کشد و کلاژن‌سازی طولانی‌مدت ایجاد می‌کند.",
      sessions: "۱ جلسه (۸ تا ۱۴ نخ)",
      downtime: "۲ تا ۳ روز",
      price: "۶ تا ۱۲ میلیون تومان",
      minBudget: 3,
      tags: ["lasting", "natural"],
      for: ["متوسط", "زیاد"],
    },
    {
      title: "پکیج جوان‌سازی ترکیبی (نخ + مزوتراپی)",
      why: "برای افتادگی محسوس، ترکیب لیفت نخ با تغذیه پوست هم‌زمان لیفت و کیفیت پوست را بهبود می‌دهد.",
      sessions: "۱ جلسه اصلی + ۲ جلسه تکمیلی",
      downtime: "۳ تا ۵ روز",
      price: "۹ تا ۱۶ میلیون تومان",
      minBudget: 4,
      tags: ["lasting"],
      for: ["زیاد"],
    },
  ],
  lips: [
    {
      title: "لیفت لب با بوتاکس",
      why: "اگر فقط فرم لب (بالا کشیدن قوس کاپید) مدنظرتان است، بدون تزریق حجم قابل انجام است.",
      sessions: "۱ جلسه",
      downtime: "بدون نقاهت",
      price: "۱٫۵ تا ۲٫۵ میلیون تومان",
      minBudget: 1,
      tags: ["natural", "quick", "minimal"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "فیلر لب تکنیک طبیعی",
      why: "حجم‌دهی محاسبه‌شده متناسب با نسبت‌های صورت؛ لب پرتر اما بدون ظاهر مصنوعی.",
      sessions: "۱ جلسه",
      downtime: "۱ تا ۲ روز تورم خفیف",
      price: "۲٫۵ تا ۴ میلیون تومان",
      minBudget: 2,
      tags: ["natural", "quick"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "فیلر لب هالیوودی / تکنیک روسی",
      why: "برای حجم مشخص و زاویه‌دار؛ با ژل باکیفیت و آنالیز تناسبات چهره انجام می‌شود.",
      sessions: "۱ تا ۲ جلسه",
      downtime: "۲ تا ۳ روز تورم",
      price: "۳٫۵ تا ۶ میلیون تومان",
      minBudget: 2,
      tags: ["quick"],
      for: ["متوسط", "زیاد"],
    },
  ],
  nose: [
    {
      title: "بوتاکس نوک بینی",
      why: "برای افتادگی خفیف نوک بینی هنگام خندیدن؛ سریع‌ترین اصلاح ممکن.",
      sessions: "۱ جلسه",
      downtime: "بدون نقاهت",
      price: "۱٫۵ تا ۲٫۵ میلیون تومان",
      minBudget: 1,
      tags: ["quick", "minimal", "natural"],
      for: ["خفیف"],
    },
    {
      title: "رینوپلاستی غیرجراحی (فیلر بینی)",
      why: "رفع قوز و نامتقارنی با ژل؛ نتیجه فوری و بدون بیهوشی و گچ.",
      sessions: "۱ جلسه",
      downtime: "۱ روز",
      price: "۳ تا ۵ میلیون تومان",
      minBudget: 2,
      tags: ["quick", "minimal", "natural"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "جراحی بینی (رینوپلاستی)",
      why: "برای تغییر اساسی فرم (طبیعی یا فانتزی) تنها راه قطعی و ماندگار، جراحی توسط دکتر آبین است.",
      sessions: "۱ جلسه + جلسات کنترل",
      downtime: "۷ تا ۱۰ روز استراحت",
      price: "مشاوره حضوری (پکیج کامل)",
      minBudget: 4,
      tags: ["lasting"],
      for: ["متوسط", "زیاد"],
    },
  ],
  skin: [
    {
      title: "هیدرودرم ابریژن + ماسک اختصاصی",
      why: "پاکسازی عمیق و درخشش؛ برای پوست‌های کدر و منافذ باز، نقطه‌ی شروع عالی است.",
      sessions: "۱ تا ۳ جلسه",
      downtime: "بدون نقاهت",
      price: "۱٫۲ تا ۲ میلیون تومان",
      minBudget: 1,
      tags: ["quick", "minimal", "natural"],
      for: ["خفیف"],
    },
    {
      title: "مزوتراپی صورت",
      why: "آبرسانی عمیق و رفع کدری با کوکتل ویتامین؛ درخشش از جلسه دوم.",
      sessions: "۳ جلسه با فاصله ۲ هفته",
      downtime: "۱ روز قرمزی خفیف",
      price: "۱٫۵ تا ۴ میلیون تومان",
      minBudget: 2,
      tags: ["natural", "minimal"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "لیزر فرکشنال / پیلینگ پزشکی",
      why: "برای جوش فعال، جای جوش و منافذ باز؛ لایه‌برداری کنترل‌شده و ترمیم کلاژنی.",
      sessions: "۳ تا ۵ جلسه",
      downtime: "۲ تا ۴ روز پوسته‌ریزی",
      price: "۲ تا ۶ میلیون تومان",
      minBudget: 3,
      tags: ["lasting"],
      for: ["متوسط", "زیاد"],
    },
  ],
  hair: [
    {
      title: "مزوتراپی مو",
      why: "تغذیه مستقیم ریشه با ویتامین و مینوکسیدیل موضعی؛ کاهش ریزش از ماه دوم.",
      sessions: "۴ تا ۶ جلسه",
      downtime: "بدون نقاهت",
      price: "۱٫۵ تا ۳ میلیون تومان",
      minBudget: 1,
      tags: ["natural", "minimal"],
      for: ["خفیف", "متوسط"],
    },
    {
      title: "PRP (پلاسمای غنی از پلاکت)",
      why: "تحریک فولیکول‌ها با فاکتورهای رشد خودتان؛ مؤثر برای ریزش هورمونی اولیه.",
      sessions: "۳ تا ۴ جلسه",
      downtime: "۱ روز",
      price: "۳ تا ۶ میلیون تومان",
      minBudget: 3,
      tags: ["lasting", "natural"],
      for: ["متوسط", "زیاد"],
    },
  ],
  body: [
    {
      title: "لیزر موهای زائد (دیود)",
      why: "حذف تدریجی و تقریباً دائمی موها؛ بی‌درد با دستگاه خنک‌شونده نسل جدید.",
      sessions: "۶ تا ۸ جلسه",
      downtime: "بدون نقاهت",
      price: "از ۴۰۰ هزار تومان به بالا",
      minBudget: 1,
      tags: ["quick", "lasting", "minimal"],
      for: ["خفیف", "متوسط", "زیاد"],
    },
    {
      title: "پکیج لیزر کامل بدن",
      why: "برای پوشش کامل صورت و بدن با تخفیف پلن دوره‌ای و جلسه‌ی هدیه.",
      sessions: "۶ تا ۸ جلسه",
      downtime: "بدون نقاهت",
      price: "پلن دوره‌ای با تخفیف ویژه",
      minBudget: 3,
      tags: ["lasting"],
      for: ["متوسط", "زیاد"],
    },
  ],
};

const areas = [
  { id: "face", label: "صورت و خط خنده", emoji: "😊", desc: "افتادگی، خطوط، فرم صورت" },
  { id: "lips", label: "لب", emoji: "💄", desc: "حجم و فرم لب" },
  { id: "nose", label: "بینی", emoji: "👃", desc: "فرم، قوز، نوک بینی" },
  { id: "skin", label: "پوست و جوش", emoji: "✨", desc: "کدری، منافذ، جای جوش" },
  { id: "hair", label: "ریزش مو", emoji: "💇‍♀️", desc: "تقویت و کاهش ریزش" },
  { id: "body", label: "بدن و موهای زائد", emoji: "⚡", desc: "لیزر بدن" },
] as const;

const severities = [
  { id: "خفیف", label: "تازه شروع شده", emoji: "🙂" },
  { id: "متوسط", label: "قابل توجه", emoji: "😐" },
  { id: "زیاد", label: "خیلی اذیتم می‌کند", emoji: "😣" },
] as const;

const priorities = [
  { id: "natural", label: "طبیعی‌ترین نتیجه", emoji: "🌸", tag: "natural" },
  { id: "lasting", label: "ماندگاری طولانی", emoji: "⏳", tag: "lasting" },
  { id: "quick", label: "نتیجه فوری", emoji: "⚡", tag: "quick" },
  { id: "minimal", label: "کمترین نقاهت", emoji: "🛋️", tag: "minimal" },
] as const;

const budgets = [
  { id: 1, label: "تا ۲ میلیون تومان" },
  { id: 2, label: "۲ تا ۵ میلیون تومان" },
  { id: 3, label: "۵ تا ۱۲ میلیون تومان" },
  { id: 4, label: "بدون محدودیت / مشاوره کامل" },
] as const;

// ─── کامپوننت ویزارد ───
export default function SurgeonConsult() {
  const [step, setStep] = useState(0); // 0..3 سوال، 4 آنالیز، 5 نتیجه
  const [area, setArea] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [budget, setBudget] = useState<number>(0);

  const answers = useMemo(
    () => ({
      area: areas.find((a) => a.id === area),
      severity,
      priority: priorities.find((p) => p.id === priority),
      budget: budgets.find((b) => b.id === budget),
    }),
    [area, severity, priority, budget]
  );

  const results = useMemo(() => {
    if (!area) return [];
    const pool = (recs[area] ?? []).filter((r) => r.for.includes(severity as never));
    const scored = pool
      .map((r) => {
        let score = 62;
        if (r.minBudget <= budget) score += 12;
        else score -= Math.min(24, (r.minBudget - budget) * 10);
        if (r.tags.includes((answers.priority?.tag ?? "") as never)) score += 14;
        if (r.for.length > 1) score += 4;
        return { ...r, score: Math.max(41, Math.min(98, score)) };
      })
      .sort((a, b) => b.score - a.score);
    return scored.slice(0, 3);
  }, [area, severity, budget, answers.priority]);

  const startAnalyze = () => {
    setStep(4);
    setTimeout(() => setStep(5), 2100);
  };

  const reset = () => {
    setStep(0);
    setArea("");
    setSeverity("");
    setPriority("");
    setBudget(0);
  };

  const waText = encodeURIComponent(
    `سلام، از «جراح هوشمند» سایت آبین نتیجه گرفتم:\n🎯 دغدغه: ${answers.area?.label}\n📊 شدت: ${severity}\n⭐ اولویت: ${answers.priority?.label}\n💰 بودجه: ${answers.budget?.label}\n\nبرای رزرو مشاوره راهنمایی‌ام کنید.`
  );

  const progress = Math.min(100, (step / 5) * 100);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-gold-soft/30 to-ivory shadow-soft">
      {/* سربرگ */}
      <div className="relative overflow-hidden bg-gradient-to-l from-ink to-[#3d2430] px-6 py-5 text-white">
        <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-gold/20 blur-2xl" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#a87b3d] text-ink">
              <IconRobot className="size-6" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-black">جراح هوشمند آبین</div>
              <div className="text-[11px] text-gold">پیش‌مشاوره‌ی شخصی‌سازی‌شده</div>
            </div>
          </div>
          <span className="hidden rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-emerald-300 sm:block">
            {step < 4 ? `مرحله ${faStep(step)} از ۴` : step === 4 ? "در حال آنالیز…" : "گزارش آماده است"}
          </span>
        </div>
        {/* نوار پیشرفت */}
        <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-gradient-to-l from-gold to-[#d9b476] transition-all duration-500"
            style={{ width: `${step >= 5 ? 100 : progress}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* مرحله ۱: ناحیه */}
        {step === 0 && (
          <div className="chat-bubble-in">
            <h3 className="text-lg font-black text-ink">سلام! 👋 کدام ناحیه بیشتر از همه براتون مهمه؟</h3>
            <p className="mt-2 text-sm text-ink-soft">انتخابتون رو بگید تا مسیر مشاوره رو شخصی‌سازی کنم.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setArea(a.id);
                    setStep(1);
                  }}
                  className={`rounded-2xl border-2 p-4 text-center transition active:scale-95 ${
                    area === a.id
                      ? "border-gold bg-gold-soft"
                      : "border-ink/10 bg-white/70 hover:border-gold/50 hover:bg-gold-soft/40"
                  }`}
                >
                  <span className="text-2xl">{a.emoji}</span>
                  <div className="mt-2 text-sm font-black text-ink">{a.label}</div>
                  <div className="mt-1 text-[11px] leading-5 text-ink-soft">{a.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* مرحله ۲: شدت */}
        {step === 1 && (
          <div className="chat-bubble-in">
            <h3 className="text-lg font-black text-ink">
              شدت مشکل در «{answers.area?.label}» چقدره؟
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {severities.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSeverity(s.id);
                    setStep(2);
                  }}
                  className="rounded-2xl border-2 border-ink/10 bg-white/70 p-5 text-center transition hover:border-gold/50 hover:bg-gold-soft/40 active:scale-95"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <div className="mt-2 text-sm font-black text-ink">{s.label}</div>
                  <div className="text-[11px] text-ink-soft">{s.id}</div>
                </button>
              ))}
            </div>
            <BackBtn onClick={() => setStep(0)} />
          </div>
        )}

        {/* مرحله ۳: اولویت */}
        {step === 2 && (
          <div className="chat-bubble-in">
            <h3 className="text-lg font-black text-ink">در نتیجه، چی براتون مهم‌تره؟</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {priorities.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPriority(p.id);
                    setStep(3);
                  }}
                  className="rounded-2xl border-2 border-ink/10 bg-white/70 p-5 text-center transition hover:border-gold/50 hover:bg-gold-soft/40 active:scale-95"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <div className="mt-2 text-sm font-black leading-6 text-ink">{p.label}</div>
                </button>
              ))}
            </div>
            <BackBtn onClick={() => setStep(1)} />
          </div>
        )}

        {/* مرحله ۴: بودجه */}
        {step === 3 && (
          <div className="chat-bubble-in">
            <h3 className="text-lg font-black text-ink">
              بودجه‌ای که برای این هدف در نظر دارید؟
            </h3>
            <p className="mt-2 text-xs text-ink-soft">
              صادقانه بگید؛ فقط برای پیشنهاد واقع‌بینانه ازش استفاده می‌کنم، نه چیز دیگری.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {budgets.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setBudget(b.id);
                    startAnalyze();
                  }}
                  className="rounded-2xl border-2 border-ink/10 bg-white/70 px-5 py-4 text-sm font-black text-ink transition hover:border-gold/50 hover:bg-gold-soft/40 active:scale-95"
                >
                  {b.label}
                </button>
              ))}
            </div>
            <BackBtn onClick={() => setStep(2)} />
          </div>
        )}

        {/* مرحله ۵: آنالیز */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="relative">
              <span className="grid size-20 place-items-center rounded-3xl bg-gradient-to-br from-gold to-[#a87b3d] text-ink shadow-soft">
                <IconRobot className="size-10 animate-pulse" />
              </span>
              <span className="absolute -inset-3 animate-ping rounded-[1.8rem] border-2 border-gold/40" />
            </div>
            <div className="mt-6 font-black text-ink">در حال آنالیز پاسخ‌های شما…</div>
            <div className="mt-2 space-y-1 text-xs text-ink-soft">
              <p>✓ بررسی تناسبات و شدت مشکل</p>
              <p>✓ تطبیق با سابقه‌ی موارد مشابه در آبین</p>
              <p>✓ فیلتر بر اساس بودجه و اولویت شما</p>
            </div>
          </div>
        )}

        {/* مرحله ۶: گزارش */}
        {step === 5 && (
          <div className="chat-bubble-in">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-ink">
                  گزارش پیش‌مشاوره برای «{answers.area?.label}»
                </h3>
                <p className="mt-1 text-xs text-ink-soft">
                  شدت: {severity} • اولویت: {answers.priority?.label} • بودجه: {answers.budget?.label}
                </p>
              </div>
              <span className="rounded-full bg-gradient-to-l from-rose to-rose-deep px-4 py-1.5 text-[11px] font-black text-white">
                شخصی‌سازی‌شده ✦
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {results.map((r, i) => (
                <div
                  key={r.title}
                  className="relative overflow-hidden rounded-3xl border border-rose/15 bg-white p-5 shadow-card"
                  style={{ animation: `bubble-in .4s ease ${i * 120}ms both` }}
                >
                  {/* امتیاز تطابق */}
                  <div className="absolute left-4 top-4 flex size-14 flex-col items-center justify-center">
                    <svg viewBox="0 0 36 36" className="absolute inset-0 size-14 -rotate-90">
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f3dfe3" strokeWidth="3.5" />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="#b5566f"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray={`${(r.score / 100) * 97.4} 97.4`}
                      />
                    </svg>
                    <span className="relative text-[11px] font-black text-rose-deep">
                      {faScore(r.score)}٪
                    </span>
                    <span className="relative text-[8px] font-bold text-ink-soft">تطابق</span>
                  </div>

                  <div className="pe-16">
                    <div className="flex items-center gap-2">
                      {i === 0 && (
                        <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-black text-ink">
                          پیشنهاد اول
                        </span>
                      )}
                      <h4 className="font-black text-ink">{r.title}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">{r.why}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold">
                      <span className="rounded-full bg-blush px-3 py-1.5 text-ink-soft">
                        🗓 {r.sessions}
                      </span>
                      <span className="rounded-full bg-blush px-3 py-1.5 text-ink-soft">
                        🛌 نقاهت: {r.downtime}
                      </span>
                      <span className="rounded-full bg-rose-soft px-3 py-1.5 text-rose-deep">
                        💰 {r.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* نکات و مراحل بعد */}
            <div className="mt-5 rounded-3xl bg-gradient-to-l from-ink to-[#3d2430] p-5 text-white">
              <div className="text-sm font-black text-gold">قدم‌های بعدی پیشنهادی:</div>
              <ul className="mt-3 space-y-2 text-xs leading-6 text-white/80">
                {[
                  "تصویر ناحیه موردنظر را در واتساپ بفرستید تا پزشک قبل از مراجعه بررسی کند.",
                  "جلسه‌ی مشاوره‌ی حضوری رایگان رزرو کنید (آنالیز چهره با دستگاه، هدیه ما).",
                  "اگر عجله دارید، همین حالا تماس بگیرید: سانس‌های همین هفته محدود است.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <IconCheck className="mt-1 size-3.5 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`${site.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-xs font-black text-white transition hover:brightness-110 active:scale-95"
                >
                  <IconWhatsapp className="size-4" />
                  ارسال گزارش به واتساپ کلینیک
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black text-rose-deep transition hover:scale-105 active:scale-95"
                >
                  <IconPhone className="size-4" />
                  {site.phoneDisplay}
                </a>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs font-black text-white transition hover:bg-white/10 active:scale-95"
                >
                  <IconArrowLeft className="size-4" />
                  شروع دوباره
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] leading-6 text-ink-soft">
              ⚠️ این گزارش یک پیش‌مشاوره‌ی هوشمند است و جایگزین معاینه‌ی پزشک نیست؛
              تشخیص نهایی و دوز دقیق فقط در جلسه‌ی حضوری توسط پزشک تعیین می‌شود.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-5 flex items-center gap-1.5 text-xs font-bold text-ink-soft transition hover:text-rose-deep"
    >
      <IconArrowLeft className="size-4 rotate-180" />
      مرحله قبل
    </button>
  );
}

// تبدیل اعداد
const faScore = (n: number) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
const faStep = (n: number) => "۱۲۳۴"[n] ?? "۱";
