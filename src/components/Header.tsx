"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import {
  IconClose,
  IconMenu,
  IconPhone,
  IconRobot,
  IconChat,
  IconWhatsapp,
  IconTelegram,
  IconInstagram,
  IconClock,
  IconCalendar,
} from "./Icons";

const nav = [
  { href: "/", label: "خانه" },
  { href: "/portfolio", label: "نمونه‌کارها" },
  { href: "/blog", label: "بلاگ" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

const aiLinks = [
  {
    href: "/ai-assistant",
    label: "دستیار هوشمند آبینا",
    desc: "پاسخ فوری ۲۴ ساعته به سوالات شما",
    icon: IconChat,
  },
  {
    href: "/ai-surgeon",
    label: "جراح هوشمند آبین",
    desc: "پیش‌مشاوره و پیشنهاد روش مناسب چهره",
    icon: IconRobot,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const pathname = usePathname();

  // قفل اسکرول بدنه هنگام باز بودن منو
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* نوار بالایی — دسکتاپ */}
        <div
          className={`hidden overflow-hidden bg-ink text-white/90 transition-all duration-300 lg:block ${
            scrolled ? "max-h-0" : "max-h-12"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
            <div className="flex items-center gap-5">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-1.5 transition hover:text-gold"
              >
                <IconPhone className="size-3.5" />
                <span className="font-bold tracking-wide">{site.phoneDisplay}</span>
              </a>
              <span className="flex items-center gap-1.5 text-white/60">
                <IconClock className="size-3.5" />
                شنبه تا پنجشنبه ۱۰ تا ۲۰
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="واتساپ"
                className="transition hover:text-gold"
              >
                <IconWhatsapp className="size-4" />
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="تلگرام"
                className="transition hover:text-gold"
              >
                <IconTelegram className="size-4" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="اینستاگرام"
                className="transition hover:text-gold"
              >
                <IconInstagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* نوار اصلی */}
        <div
          className={`transition-all duration-300 ${
            scrolled ? "glass shadow-soft" : "bg-cream/60 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            {/* لوگو */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-lg font-black text-white shadow-card transition-transform duration-300 group-hover:rotate-6">
                آب
                <span className="absolute -bottom-1 -left-1 grid size-5 place-items-center rounded-full bg-gold text-[10px] font-black text-ink">
                  ✦
                </span>
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-black text-ink">
                  کلینیک زیبایی <span className="text-rose">آبین</span>
                </span>
                <span className="block text-[11px] font-medium text-ink-soft">
                  ABIN BEAUTY CLINIC
                </span>
              </span>
            </Link>

            {/* منوی دسکتاپ */}
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive(item.href)
                      ? "bg-rose-soft text-rose-deep"
                      : "text-ink-soft hover:bg-rose-soft/60 hover:text-rose-deep"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* زیرمنوی هوش مصنوعی */}
              <div
                className="relative"
                onMouseEnter={() => setAiOpen(true)}
                onMouseLeave={() => setAiOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive("/ai")
                      ? "bg-rose-soft text-rose-deep"
                      : "text-ink-soft hover:bg-rose-soft/60 hover:text-rose-deep"
                  }`}
                >
                  <IconRobot className="size-4" />
                  هوش مصنوعی
                </button>
                <div
                  className={`absolute left-0 top-full z-50 w-80 pt-3 transition-all duration-200 ${
                    aiOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl border border-rose/15 bg-ivory p-2 shadow-soft">
                    {aiLinks.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="flex items-start gap-3 rounded-2xl p-3 transition hover:bg-rose-soft/60"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose to-rose-deep text-white">
                          <a.icon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink">
                            {a.label}
                          </span>
                          <span className="block text-xs leading-5 text-ink-soft">
                            {a.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* اکشن‌ها */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:bg-ink-soft hover:shadow-card md:flex"
              >
                <IconPhone className="size-4 text-gold" />
                {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-5 py-2.5 text-sm font-bold text-white shadow-card transition hover:shadow-glow sm:flex"
              >
                <IconCalendar className="size-4" />
                رزرو نوبت
              </Link>

              {/* دکمه همبرگری موبایل */}
              <button
                onClick={() => setOpen(true)}
                aria-label="باز کردن منو"
                className="grid size-11 place-items-center rounded-2xl bg-ink text-white transition active:scale-95 lg:hidden"
              >
                <IconMenu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ منوی کشویی موبایل — از سمت راست ═══ */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* پس‌زمینه تیره */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* پنل منو — سمت راست، ورود از راست به چپ */}
        <aside
          className="drawer absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-ivory shadow-2xl"
          style={{ transform: open ? "translateX(0)" : "translateX(101%)" }}
          role="dialog"
          aria-label="منوی اصلی"
        >
          <div className="bg-grain flex-1 p-6">
            {/* سربرگ منو */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-lg font-black text-white">
                  آب
                </span>
                <div className="leading-tight">
                  <div className="font-black text-ink">کلینیک آبین</div>
                  <div className="text-[11px] text-ink-soft">ABIN CLINIC</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
                className="grid size-10 place-items-center rounded-xl bg-rose-soft text-rose-deep transition active:scale-90"
              >
                <IconClose className="size-5" />
              </button>
            </div>

            {/* لینک‌های اصلی */}
            <nav className="space-y-1.5">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  } ${
                    isActive(item.href)
                      ? "bg-gradient-to-l from-rose to-rose-deep text-white shadow-card"
                      : "bg-white text-ink hover:bg-rose-soft"
                  }`}
                >
                  {item.label}
                  <span
                    className={`text-xs ${
                      isActive(item.href) ? "text-white/70" : "text-rose"
                    }`}
                  >
                    ●
                  </span>
                </Link>
              ))}
            </nav>

            {/* بخش هوش مصنوعی */}
            <div
              className="mt-5 rounded-3xl border border-gold/30 bg-gradient-to-b from-gold-soft/60 to-white p-4"
              style={{
                transitionDelay: open ? "400ms" : "0ms",
                opacity: open ? 1 : 0,
                transition: "opacity .5s, transform .5s",
                transform: open ? "translateX(0)" : "translateX(24px)",
              }}
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-black text-ink">
                <IconRobot className="size-5 text-gold" />
                خدمات هوش مصنوعی
              </div>
              {aiLinks.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="mb-2 flex items-center gap-3 rounded-2xl bg-white/80 p-3 transition hover:bg-white"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-ink text-gold">
                    <a.icon className="size-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{a.label}</span>
                    <span className="block text-[11px] text-ink-soft">{a.desc}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* دکمه‌های تماس */}
            <div
              className="mt-5 space-y-2"
              style={{
                transitionDelay: open ? "480ms" : "0ms",
                opacity: open ? 1 : 0,
                transition: "opacity .5s, transform .5s",
                transform: open ? "translateX(0)" : "translateX(24px)",
              }}
            >
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-rose to-rose-deep py-3.5 font-bold text-white shadow-card transition active:scale-95"
              >
                <IconPhone className="size-5" />
                تماس: {site.phoneDisplay}
              </a>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-[#25d366] py-3 text-xs font-bold text-white transition active:scale-95"
                >
                  <IconWhatsapp className="size-5" />
                  واتساپ
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-[#2aabee] py-3 text-xs font-bold text-white transition active:scale-95"
                >
                  <IconTelegram className="size-5" />
                  تلگرام
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] py-3 text-xs font-bold text-white transition active:scale-95"
                >
                  <IconInstagram className="size-5" />
                  اینستاگرام
                </a>
              </div>
            </div>

            <p className="mt-5 text-center text-[11px] leading-5 text-ink-soft">
              {site.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
