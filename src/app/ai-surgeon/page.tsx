import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SurgeonConsult from "@/components/SurgeonConsult";
import ResultSimulator from "@/components/ResultSimulator";
import OpenChatButton from "@/components/OpenChatButton";
import { site } from "@/lib/site";
import {
  IconArrowLeft,
  IconChat,
  IconCheck,
  IconPhone,
  IconRobot,
  IconShield,
  IconSparkle,
  IconWhatsapp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "جراح هوشمند آبین",
  description:
    "جراح هوشمند کلینیک آبین: پیش‌مشاوره‌ی هوشمند و رایگان؛ با چند سوال کوتاه، روش‌های مناسب چهره شما را با تخمین جلسات، نقاهت و هزینه پیشنهاد می‌دهد.",
};

const features = [
  {
    icon: IconRobot,
    title: "پیش‌مشاوره‌ی شخصی",
    desc: "بر اساس ناحیه دغدغه، شدت، اولویت و بودجه شما — نه یک پاسخ عمومی.",
  },
  {
    icon: IconSparkle,
    title: "پیشنهاد چندگزینه‌ای",
    desc: "همیشه ۲ تا ۳ روش با درصد تطابق؛ انتخاب نهایی با شما و پزشک است.",
  },
  {
    icon: IconShield,
    title: "بدون اغراق",
    desc: "اگر مورد شما نیازمند جلسه‌ی حضوری یا جراحی باشد، صادقانه می‌گوییم.",
  },
];

export default function AiSurgeonPage() {
  return (
    <>
      <PageHero
        badge="هوش مصنوعی آبین"
        title="جراح هوشمند آبین 🤖"
        subtitle="پیش از هر تزریق یا تصمیمی، یک پیش‌مشاوره‌ی هوشمند بگیرید: چند سوال کوتاه، گزارش اختصاصی با پیشنهاد روش، تعداد جلسات، نقاهت و تخمین هزینه."
      />

      {/* ویزارد مشاوره */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Reveal>
          <SurgeonConsult />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-rose/15 bg-ivory p-5 text-center shadow-card"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#a87b3d] text-white">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-3 text-sm font-black text-ink">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-ink-soft">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* شبیه‌ساز نتیجه */}
      <section className="bg-blush py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="deco-line text-2xl font-black text-ink sm:text-3xl">
              شبیه‌ساز نتیجه — قبل و بعد
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-ink-soft">
              یکی از موارد زیر را انتخاب کنید و دستگیره را بکشید؛ نتیجه‌ی واقعی
              مراجعین آبین را ببینید و برای خودتان تصور کنید.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <ResultSimulator />
          </Reveal>
        </div>
      </section>

      {/* چطور کار می‌کند */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold/25 to-rose/20 blur-xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/ai-surgeon.jpg"
                  alt="آنالیز هوش مصنوعی چهره در کلینیک آبین"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                {/* نوار اسکن تزئینی */}
                <div className="pointer-events-none absolute inset-x-8 top-8 flex items-center gap-2 rounded-full bg-ink/60 px-4 py-2 text-[10px] font-bold text-white backdrop-blur">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  آنالیز زنده چهره — تناسب ۹۴٪ با الگوی طلایی
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-2xl font-black text-ink sm:text-3xl">
                چطور کار می‌کند؟
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5">
              {[
                {
                  n: "۱",
                  t: "پاسخ به ۴ سوال کوتاه",
                  d: "ناحیه دغدغه، شدت مشکل، اولویت شما در نتیجه و بازه‌ی بودجه — کمتر از یک دقیقه.",
                },
                {
                  n: "۲",
                  t: "آنالیز هوشمند",
                  d: "پاسخ‌های شما با پرونده‌ی هزاران مورد مشابه در آبین و پروتکل‌های پزشکی تطبیق داده می‌شود.",
                },
                {
                  n: "۳",
                  t: "گزارش اختصاصی",
                  d: "۲ تا ۳ روش پیشنهادی با درصد تطابق، جلسات، نقاهت و تخمین هزینه دریافت می‌کنید.",
                },
                {
                  n: "۴",
                  t: "تصمیم با خیال راحت",
                  d: "گزارش را در واتساپ برای کلینیک بفرستید یا نوبت مشاوره‌ی حضوری رایگان بگیرید.",
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-lg font-black text-white shadow-card">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-black text-ink">{s.t}</h3>
                      <p className="mt-1 text-sm leading-7 text-ink-soft">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-ink via-[#3d2430] to-ink p-8 text-center text-white shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -top-20 right-1/3 size-64 rounded-full bg-gold/15 blur-[90px]" />
            <h2 className="text-2xl font-black sm:text-3xl">
              هوش مصنوعی پیشنهاد می‌دهد، پزشک تایید می‌کند
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/70">
              نتیجه‌ی جراح هوشمند نقطه‌ی شروع گفتگو با پزشک است. برای رسیدن از
              «پیشنهاد» به «برنامه‌ی درمانی قطعی»، مشاوره‌ی حضوری رایگان آبین را
              رزرو کنید.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-[#a87b3d] px-7 py-3.5 font-black text-ink transition hover:scale-105 active:scale-95"
              >
                <IconPhone className="size-5" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 font-black text-white transition hover:scale-105 active:scale-95"
              >
                <IconWhatsapp className="size-5" />
                واتساپ آبین
              </a>
              <OpenChatButton className="flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 font-black text-white transition hover:bg-white/10 hover:scale-105 active:scale-95">
                <IconChat className="size-5" />
                گفتگو با آبینا
              </OpenChatButton>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              {["بدون ثبت‌نام", "کاملاً رایگان", "محرمانه", "۲۴ ساعته"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <IconCheck className="size-4 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs leading-6 text-ink-soft">
            <IconArrowLeft className="size-4 rotate-180 text-rose" />
            هوش مصنوعی ما ابزار تصمیم‌گیری است؛ تصمیم نهایی همیشه با شما و پزشک
            متخصص است.
          </p>
        </Reveal>
      </section>
    </>
  );
}
