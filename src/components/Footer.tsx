import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import {
  IconClock,
  IconInstagram,
  IconLocation,
  IconMail,
  IconPhone,
  IconTelegram,
  IconWhatsapp,
} from "./Icons";

const links = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/portfolio", label: "نمونه‌کارها" },
  { href: "/blog", label: "بلاگ" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/ai-assistant", label: "دستیار هوشمند" },
  { href: "/ai-surgeon", label: "جراح هوشمند" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* دکور */}
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-rose/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 size-[400px] rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 md:pb-10">
        {/* CTA تماس */}
        <div className="mb-14 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-right">
          <div>
            <h3 className="text-xl font-black md:text-2xl">
              آماده‌اید زیبایی رو شروع کنید؟
            </h3>
            <p className="mt-2 text-sm text-white/70">
              مشاوره‌ی اولیه رایگانه — همین حالا با ما در تماس باشید
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-6 py-3 text-sm font-bold shadow-card transition hover:shadow-glow"
            >
              <IconPhone className="size-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-bold transition hover:brightness-110"
            >
              <IconWhatsapp className="size-4" />
              واتساپ
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* درباره */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-lg font-black">
                آب
              </span>
              <div className="leading-tight">
                <div className="font-black">کلینیک زیبایی آبین</div>
                <div className="text-[11px] text-white/50">ABIN BEAUTY CLINIC</div>
              </div>
            </div>
            <p className="text-sm leading-7 text-white/60">
              {site.slogan}؛ با بیش از یک دهه تجربه، تجهیزات نسل جدید و تیمی از
              متخصصین مجاز، همراه شما در مسیر زیبایی و اعتماد به نفس هستیم.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: site.instagram, icon: IconInstagram, label: "اینستاگرام" },
                { href: site.telegram, icon: IconTelegram, label: "تلگرام" },
                { href: site.whatsapp, icon: IconWhatsapp, label: "واتساپ" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/80 transition hover:bg-rose hover:text-white"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* دسترسی سریع */}
          <div>
            <h4 className="mb-4 text-sm font-black text-gold">دسترسی سریع</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/70 md:grid-cols-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* خدمات */}
          <div>
            <h4 className="mb-4 text-sm font-black text-gold">خدمات ما</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link href="/#services" className="transition hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h4 className="mb-4 text-sm font-black text-gold">اطلاعات تماس</h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <IconLocation className="mt-0.5 size-4.5 shrink-0 text-rose" />
                {site.address}
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-3 transition hover:text-gold"
                >
                  <IconPhone className="size-4.5 shrink-0 text-rose" />
                  <span className="font-bold tracking-wide">{site.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="size-4.5 shrink-0 text-rose" />
                {site.email}
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 size-4.5 shrink-0 text-rose" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© ۱۴۰۵ کلینیک زیبایی آبین — تمامی حقوق محفوظ است.</p>
          <p>
            طراحی و توسعه با <span className="text-rose">♥</span> برای زیبایی شما
          </p>
        </div>
      </div>
    </footer>
  );
}
