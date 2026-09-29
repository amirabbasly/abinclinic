import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { AiChatPage } from "@/components/AiChat";
import { site } from "@/lib/site";
import {
  IconArrowLeft,
  IconCheck,
  IconClock,
  IconPhone,
  IconRobot,
  IconShield,
  IconWhatsapp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "دستیار هوشمند آبینا",
  description:
    "آبینا؛ دستیار هوشمند کلینیک زیبایی آبین. ۲۴ ساعته به سوالات شما درباره‌ی خدمات، قیمت‌ها، رزرو نوبت و مراقبت‌ها پاسخ می‌دهد.",
};

const skills = [
  {
    title: "مشاوره خدمات",
    desc: "فیلر، بوتاکس، لیفت با نخ، لیزر، مزوتراپی و… — کاربرد، ماندگاری و شرایط هر خدمت را توضیح می‌دهد.",
    emoji: "💆‍♀️",
  },
  {
    title: "اعلام قیمت و تعرفه",
    desc: "قیمت پایه‌ی تمام خدمات و تخفیف‌های جاری را به‌صورت شفاف اعلام می‌کند.",
    emoji: "💰",
  },
  {
    title: "رزرو و هماهنگی نوبت",
    desc: "سانس‌های خالی هر خدمت را می‌گوید و شما را برای ثبت نهایی راهنمایی می‌کند.",
    emoji: "📅",
  },
  {
    title: "آدرس و ساعات کاری",
    desc: "مسیر دسترسی، پارکینگ، نزدیک‌ترین مترو و ساعات کاری هر روز هفته.",
    emoji: "📍",
  },
  {
    title: "مراقبت‌های بعد از کار",
    desc: "نکات بعد از فیلر، بوتاکس، لیزر و میکروبلیدینگ را مرحله‌به‌مرحله توضیح می‌دهد.",
    emoji: "🌷",
  },
  {
    title: "ارجاع هوشمند",
    desc: "اگر سوال تخصصی‌تر باشد، شما را به جراح هوشمند یا کارشناس انسانی وصل می‌کند.",
    emoji: "🔗",
  },
];

export default function AiAssistantPage() {
  return (
    <>
      <PageHero
        badge="هوش مصنوعی آبین"
        title="دستیار هوشمند «آبینا»"
        subtitle="هر سوالی درباره‌ی زیبایی، خدمات، قیمت‌ها و رزرو نوبت دارید، همین حالا از آبینا بپرسید؛ ۲۴ ساعته و بدون معطلی پاسخ می‌گیرید."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-5">
          {/* چت */}
          <div className="lg:col-span-3">
            <Reveal>
              <AiChatPage />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-card transition hover:bg-ink-soft active:scale-95"
                >
                  <IconPhone className="size-4 text-gold" />
                  گفتگو با کارشناس انسانی
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-bold text-white shadow-card transition hover:brightness-105 active:scale-95"
                >
                  <IconWhatsapp className="size-4" />
                  واتساپ آبین
                </a>
              </div>
            </Reveal>
          </div>

          {/* توانایی‌ها */}
          <div className="space-y-4 lg:col-span-2">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-rose/15 bg-ivory p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-black text-ink">
                  <IconRobot className="size-5 text-rose" />
                  آبینا چه کارهایی بلد است؟
                </h3>
                <div className="mt-5 space-y-4">
                  {skills.map((s, i) => (
                    <div
                      key={s.title}
                      className="flex gap-3 rounded-2xl bg-blush p-3.5 transition hover:bg-rose-soft"
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      <span className="text-xl">{s.emoji}</span>
                      <div>
                        <div className="text-sm font-black text-ink">{s.title}</div>
                        <div className="mt-1 text-xs leading-6 text-ink-soft">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl bg-gradient-to-l from-ink to-[#3d2430] p-6 text-white shadow-card">
                <div className="flex items-center gap-2 text-sm font-black text-gold">
                  <IconShield className="size-5" />
                  محرمانگی و شفافیت
                </div>
                <ul className="mt-4 space-y-2.5 text-xs leading-6 text-white/75">
                  {[
                    "گفتگوهای شما محرمانه است و برای شخصی‌سازی پاسخ استفاده نمی‌شود.",
                    "آبینا به‌جای پزشک تصمیم نمی‌گیرد؛ تشخیص نهایی همیشه با پزشک متخصص است.",
                    "برای موارد تخصصی، به جراح هوشمند یا جلسه‌ی حضوری ارجاع داده می‌شوید.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <IconCheck className="mt-1 size-3.5 shrink-0 text-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-surgeon"
                  className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-gold to-[#a87b3d] py-3 text-sm font-black text-ink transition hover:brightness-105 active:scale-95"
                >
                  ادامه با جراح هوشمند آبین
                  <IconArrowLeft className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="flex items-center justify-center gap-2 text-center text-[11px] leading-6 text-ink-soft">
                <IconClock className="size-4 text-rose" />
                آبینا در ساعات کاری پاسخ‌های خود را با تیم پشتیبانی آبین هماهنگ می‌کند.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
