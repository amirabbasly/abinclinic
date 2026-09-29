import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import OpenChatButton from "@/components/OpenChatButton";
import { site } from "@/lib/site";
import {
  IconChat,
  IconClock,
  IconInstagram,
  IconLocation,
  IconMail,
  IconPhone,
  IconRobot,
  IconTelegram,
  IconWhatsapp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "تماس با ما و رزرو نوبت",
  description:
    "تماس با کلینیک زیبایی آبین: شماره تماس ۰۹۱۲۳۰۲۲۰۶۴، واتساپ، تلگرام، اینستاگرام، آدرس، ساعات کاری و فرم رزرو آنلاین نوبت.",
};

const quickLinks = [
  {
    href: `tel:${site.phoneTel}`,
    icon: IconPhone,
    label: "تماس تلفنی",
    sub: site.phoneDisplay,
    cls: "bg-gradient-to-l from-rose to-rose-deep",
  },
  {
    href: site.whatsapp,
    icon: IconWhatsapp,
    label: "واتساپ",
    sub: "پاسخ‌گویی سریع",
    cls: "bg-gradient-to-l from-[#2bb74f] to-[#189b3f]",
  },
  {
    href: site.telegram,
    icon: IconTelegram,
    label: "تلگرام",
    sub: "@abinclinic",
    cls: "bg-gradient-to-l from-[#3ab3e8] to-[#1e96cf]",
  },
  {
    href: site.instagram,
    icon: IconInstagram,
    label: "اینستاگرام",
    sub: "@abinclinic",
    cls: "bg-gradient-to-l from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="در خدمت شما هستیم"
        title="تماس با کلینیک آبین"
        subtitle="هر طوری که راحت‌ترید با ما در تماس باشید؛ تلفن، واتساپ، تلگرام، اینستاگرام، چت هوشمند یا فرم رزرو آنلاین."
      />

      {/* دکمه‌های سریع */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {quickLinks.map((q, i) => (
            <Reveal key={q.label} delay={i * 80}>
              <a
                href={q.href}
                target={q.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`flex h-full flex-col items-center gap-3 rounded-3xl ${q.cls} p-6 text-center text-white shadow-card transition hover:-translate-y-1 hover:shadow-soft active:scale-95`}
              >
                <span className="grid size-13 place-items-center rounded-2xl bg-white/20 p-3.5">
                  <q.icon className="size-6" />
                </span>
                <span className="text-sm font-black">{q.label}</span>
                <span className="text-[11px] text-white/80">{q.sub}</span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* دو دکمه هوش مصنوعی */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal delay={100}>
            <OpenChatButton className="flex w-full items-center gap-4 rounded-3xl border-2 border-rose/30 bg-rose-soft/40 p-5 text-right transition hover:border-rose hover:bg-rose-soft active:scale-[0.98]">
              <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep p-3.5 text-white">
                <IconChat className="size-6" />
              </span>
              <span>
                <span className="block font-black text-ink">
                  چت فوری با دستیار هوشمند «آبینا»
                </span>
                <span className="mt-1 block text-xs leading-6 text-ink-soft">
                  پاسخ سوالات پرتکرار در چند ثانیه — ۲۴ ساعته
                </span>
              </span>
            </OpenChatButton>
          </Reveal>
          <Reveal delay={180}>
            <a
              href="/ai-surgeon"
              className="flex w-full items-center gap-4 rounded-3xl border-2 border-gold/40 bg-gold-soft/50 p-5 text-right transition hover:border-gold hover:bg-gold-soft active:scale-[0.98]"
            >
              <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#a87b3d] p-3.5 text-white">
                <IconRobot className="size-6" />
              </span>
              <span>
                <span className="block font-black text-ink">
                  پیش‌مشاوره با جراح هوشمند آبین
                </span>
                <span className="mt-1 block text-xs leading-6 text-ink-soft">
                  پیشنهاد روش مناسب + تخمین جلسات و هزینه — رایگان
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* فرم + اطلاعات */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-rose/15 bg-ivory p-6 shadow-card">
                <h3 className="font-black text-ink">اطلاعات تماس</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-soft text-rose-deep">
                      <IconPhone className="size-5" />
                    </span>
                    <div>
                      <div className="text-[11px] text-ink-soft">تلفن مشاوره و رزرو</div>
                      <a
                        href={`tel:${site.phoneTel}`}
                        className="font-black text-ink transition hover:text-rose-deep"
                        dir="ltr"
                      >
                        {site.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold-soft text-[#a87b3d]">
                      <IconMail className="size-5" />
                    </span>
                    <div>
                      <div className="text-[11px] text-ink-soft">ایمیل</div>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-bold text-ink transition hover:text-rose-deep"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-soft text-rose-deep">
                      <IconLocation className="size-5" />
                    </span>
                    <div>
                      <div className="text-[11px] text-ink-soft">آدرس کلینیک</div>
                      <p className="font-bold leading-7 text-ink">{site.address}</p>
                      <a
                        href={site.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-xs font-black text-rose-deep underline underline-offset-4"
                      >
                        مشاهده روی نقشه ↗
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border border-rose/15 bg-ivory p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-black text-ink">
                  <IconClock className="size-5 text-rose" />
                  ساعات کاری
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between rounded-xl bg-blush px-4 py-2.5"
                    >
                      <span className="font-bold text-ink">{h.day}</span>
                      <span className="text-ink-soft">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-gold-soft/60 px-4 py-3 text-[11px] leading-6 text-ink">
                  💡 برای کاهش انتظار، پیش از مراجعه حضوری از طریق فرم رزرو یا تماس
                  تلفنی نوبت بگیرید.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* نقشه */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-rose/15 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-ink px-6 py-4 text-white">
              <span className="flex items-center gap-2 text-sm font-bold">
                <IconLocation className="size-5 text-gold" />
                موقعیت کلینیک روی نقشه
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold transition hover:bg-rose"
              >
                مسیریابی با نقشه ↗
              </a>
            </div>
            <iframe
              title="نقشه کلینیک آبین"
              src={site.mapsEmbed}
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
