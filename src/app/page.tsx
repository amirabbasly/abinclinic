import Image from "next/image";
import Link from "next/link";
import { cases } from "@/data/portfolio";
import { posts } from "@/data/blog";
import { faqs, services, stats, testimonials } from "@/data/services";
import { site } from "@/lib/site";
import Accordion from "@/components/Accordion";
import Counter from "@/components/Counter";
import BeforeAfter from "@/components/BeforeAfter";
import OpenChatButton from "@/components/OpenChatButton";
import Reveal from "@/components/Reveal";
import {
  IconArrowLeft,
  IconCalendar,
  IconChat,
  IconCheck,
  IconClock,
  IconHeart,
  IconInstagram,
  IconLocation,
  IconPhone,
  IconRobot,
  IconShield,
  IconSparkle,
  IconStar,
  IconTelegram,
  IconWhatsapp,
  serviceIcon,
} from "@/components/Icons";

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden">
      {/* دکورهای پس‌زمینه */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-rose-soft blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-[420px] rounded-full bg-gold-soft blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        {/* متن */}
        <div className="text-center lg:text-right">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1.5 text-xs font-bold text-ink">
              <IconSparkle className="size-4 text-gold" />
              بیش از ۱۲ سال تجربه در زیبایی و جوان‌سازی
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-black leading-[1.25] text-ink sm:text-5xl lg:text-[3.4rem]">
              زیبایی شما،
              <br />
              <span className="text-golden">امضای هنری ماست</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-ink-soft lg:mx-0">
              در کلینیک زیبایی آبین، علم روز دنیا با هنر زیبایی ترکیب می‌شود؛ از
              تزریقات تخصصی و جوان‌سازی بدون جراحی تا لیزر و مراقبت از پوست — با
              مواد صددرصد اورجینال و تیمی از بهترین متخصصین.
            </p>
          </Reveal>

          {/* دکمه‌های اصلی */}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-7 py-3.5 font-bold text-white shadow-soft transition hover:shadow-glow active:scale-95"
              >
                <IconCalendar className="size-5" />
                رزرو مشاوره رایگان
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white shadow-card transition hover:bg-ink-soft active:scale-95"
              >
                <IconPhone className="size-5 text-gold" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-[#25d366]/60 bg-[#25d366]/10 px-6 py-3 font-bold text-[#128c4a] transition hover:bg-[#25d366]/20 active:scale-95"
              >
                <IconWhatsapp className="size-5" />
                واتساپ
              </a>
            </div>
          </Reveal>

          {/* اعتماد */}
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-soft lg:justify-start">
              <span className="flex items-center gap-2">
                <span className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="size-4" />
                  ))}
                </span>
                ۴٫۹ از ۵ — امتیاز مراجعین
              </span>
              <span className="flex items-center gap-1.5">
                <IconShield className="size-5 text-rose" />
                مواد تزریقی اورجینال با کد رهگیری
              </span>
            </div>
          </Reveal>
        </div>

        {/* تصویر */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose/25 via-transparent to-gold/25 blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] shadow-soft">
              <Image
                src="/images/hero.jpg"
                alt="کلینیک زیبایی آبین — نمونه درخشش و زیبایی پوست"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* کارت شناور آمار */}
            <div className="animate-float absolute -right-3 top-8 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-md sm:-right-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-rose-soft text-rose-deep">
                  <IconHeart className="size-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-lg font-black text-ink">
                    <Counter value={8000} suffix="+" />
                  </div>
                  <div className="text-[11px] text-ink-soft">مراجع راضی</div>
                </div>
              </div>
            </div>

            {/* کارت شناور نظرسنجی */}
            <div className="animate-float-slow absolute -left-3 bottom-10 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-md sm:-left-6">
              <div className="flex items-center gap-2">
                <span className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="size-3.5" />
                  ))}
                </span>
                <span className="text-xs font-bold text-ink">۴٫۹ / ۵</span>
              </div>
              <div className="mt-1 text-[11px] leading-5 text-ink-soft">
                «فیلرم فوق‌العاده طبیعی شده!»
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── نوار دکمه‌های ارتباطی (درخواست کاربر: دکمه‌های زیاد) ───────────── */
function ContactStrip() {
  const buttons = [
    {
      href: `tel:${site.phoneTel}`,
      icon: IconPhone,
      title: "تماس تلفنی",
      sub: "پاسخ فوری در ساعات کاری",
      cls: "from-rose to-rose-deep",
      external: true,
    },
    {
      href: site.whatsapp,
      icon: IconWhatsapp,
      title: "واتساپ",
      sub: "پیام بدهید، سریع جواب می‌دهیم",
      cls: "from-[#2bb74f] to-[#189b3f]",
      external: true,
    },
    {
      href: site.telegram,
      icon: IconTelegram,
      title: "تلگرام",
      sub: "کانال و پشتیبانی آبین",
      cls: "from-[#3ab3e8] to-[#1e96cf]",
      external: true,
    },
    {
      href: site.instagram,
      icon: IconInstagram,
      title: "اینستاگرام",
      sub: "نمونه‌کارهای روزانه",
      cls: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
      external: true,
    },
  ];

  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-4 sm:px-6">
      <Reveal>
        <div className="rounded-[2rem] border border-rose/15 bg-ivory p-4 shadow-soft sm:p-6">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-black text-ink">
            <IconChat className="size-5 text-rose" />
            همه راه‌های ارتباط با آبین — یکی را انتخاب کنید
          </div>

          {/* ردیف شبکه‌های اجتماعی */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {buttons.map((b) => (
              <a
                key={b.title}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center gap-3 rounded-2xl bg-gradient-to-l ${b.cls} p-3.5 text-white shadow-card transition hover:-translate-y-1 hover:shadow-soft active:scale-95`}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/20">
                  <b.icon className="size-5" />
                </span>
                <span className="min-w-0 text-right leading-tight">
                  <span className="block text-sm font-black">{b.title}</span>
                  <span className="block truncate text-[11px] text-white/80">
                    {b.sub}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* ردیف هوش مصنوعی و رزرو */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <OpenChatButton className="group flex items-center gap-3 rounded-2xl border-2 border-rose/30 bg-rose-soft/50 p-3.5 text-right transition hover:border-rose hover:bg-rose-soft active:scale-95">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose to-rose-deep text-white">
                <IconChat className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-black text-ink">
                  چت آنلاین با آبینا 🤖
                </span>
                <span className="block text-[11px] text-ink-soft">
                  دستیار هوشمند — پاسخ در چند ثانیه
                </span>
              </span>
            </OpenChatButton>

            <Link
              href="/ai-surgeon"
              className="group flex items-center gap-3 rounded-2xl border-2 border-gold/40 bg-gold-soft/50 p-3.5 text-right transition hover:border-gold hover:bg-gold-soft active:scale-95"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#a87b3d] text-white">
                <IconRobot className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-black text-ink">
                  جراح هوشمند آبین
                </span>
                <span className="block text-[11px] text-ink-soft">
                  پیش‌مشاوره‌ی هوشمند، رایگان
                </span>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-2xl border-2 border-ink/15 bg-blush p-3.5 text-right transition hover:border-ink/40 active:scale-95"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-gold">
                <IconCalendar className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-black text-ink">
                  رزرو آنلاین نوبت
                </span>
                <span className="block text-[11px] text-ink-soft">
                  فرم رزرو + آدرس و ساعت کاری
                </span>
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────── خدمات ─────────────────────────── */
function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="text-center">
        <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl">
          خدمات تخصصی کلینیک آبین
        </h2>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-ink-soft">
          هر خدمت، با تجهیزات نسل جدید، مواد اورجینال و توسط پزشک متخصص انجام
          می‌شود؛ انتخاب با آنالیز چهره و مشاوره‌ی رایگان آغاز می‌شود.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = serviceIcon[s.icon] ?? IconSparkle;
          return (
            <Reveal key={s.id} delay={(i % 4) * 90}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${
                  s.featured
                    ? "border-rose/25 bg-gradient-to-b from-rose-soft/40 to-ivory"
                    : "border-ink/8 bg-white/70"
                }`}
              >
                {s.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[10px] font-black text-ink">
                    پرطرفدار
                  </span>
                )}
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-white shadow-card transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-4 text-lg font-black text-ink">{s.title}</h3>
                <p className="mt-2 min-h-20 text-[13px] leading-6 text-ink-soft">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-ink/8 pt-4 text-xs">
                  <span className="font-black text-rose-deep">{s.price}</span>
                  <span className="flex items-center gap-1 text-ink-soft">
                    <IconClock className="size-3.5" />
                    {s.duration}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:bg-ink-soft active:scale-95"
        >
          دریافت مشاوره و تعرفه کامل
          <IconArrowLeft className="size-5 text-gold" />
        </Link>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────── آمار ─────────────────────────── */
function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-ink via-[#3d2430] to-ink py-14 text-white">
      <div className="pointer-events-none absolute -top-20 right-1/4 size-72 rounded-full bg-rose/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 size-72 rounded-full bg-gold/15 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <div className="text-4xl font-black text-golden sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-bold text-white/70">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── نمونه‌کار (قبل/بعد) ─────────────── */
function Showcase() {
  const featured = cases.slice(0, 2);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="text-center">
        <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl">
          نتایج واقعی، قبل و بعد
        </h2>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-ink-soft">
          دستگیره را بکشید و تفاوت را با چشم خودتان ببینید. همه‌ی تصاویر با
          رضایت مراجعین منتشر شده است.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {featured.map((c, i) => (
          <Reveal key={c.id} delay={i * 120}>
            <div className="rounded-3xl border border-rose/15 bg-ivory p-4 shadow-card">
              <BeforeAfter
                before={c.before ?? c.after}
                after={c.after}
                alt={c.title}
                simBefore={!c.before}
              />
              <div className="flex items-center justify-between px-2 pt-4">
                <div>
                  <h3 className="font-black text-ink">{c.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">
                    {c.category} • {c.doctor}
                  </p>
                </div>
                <span className="rounded-full bg-rose-soft px-3 py-1.5 text-xs font-black text-rose-deep">
                  {c.result}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-7 py-3.5 font-bold text-white shadow-card transition hover:shadow-glow active:scale-95"
        >
          مشاهده همه نمونه‌کارها
          <IconArrowLeft className="size-5" />
        </Link>
      </Reveal>
    </section>
  );
}

/* ─────────────── بخش هوش مصنوعی ─────────────── */
function AiSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blush via-cream to-blush" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-rose/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1.5 text-xs font-bold text-ink">
            <IconRobot className="size-4 text-gold" />
            فناوری‌های هوش مصنوعی آبین
          </span>
          <h2 className="deco-line mt-5 text-3xl font-black text-ink sm:text-4xl">
            زیبایی، هوشمندتر از همیشه
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-8 text-ink-soft">
            پیش از هر تصمیمی، با هوش مصنوعی آبین مشورت کنید؛ هم رایگان، هم
            ۲۴ ساعته و هم بدون نیاز به مراجعه.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* دستیار هوشمند */}
          <Reveal delay={100}>
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-rose/20 bg-ivory p-8 shadow-card transition hover:shadow-soft">
              <div className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-rose/10 blur-2xl transition group-hover:bg-rose/20" />
              <span className="grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-rose to-rose-deep text-white shadow-card">
                <IconChat className="size-8" />
              </span>
              <h3 className="mt-5 text-2xl font-black text-ink">
                دستیار هوشمند «آبینا»
              </h3>
              <p className="mt-3 leading-8 text-ink-soft">
                آبینا ۲۴ ساعته به سوالات شما درباره‌ی خدمات، قیمت‌ها، رزرو نوبت و
                مراقبت‌های بعد از کار پاسخ می‌دهد؛ سریع، دقیق و صبور!
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {[
                  "پاسخ فوری در هر ساعت شبانه‌روز",
                  "اعلام قیمت و شرایط هر خدمت",
                  "هماهنگی سریع نوبت با سانس‌های خالی",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-rose-soft text-rose-deep">
                      <IconCheck className="size-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <OpenChatButton className="flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-6 py-3 text-sm font-bold text-white shadow-card transition hover:shadow-glow">
                  <IconChat className="size-4" />
                  شروع گفتگو
                </OpenChatButton>
                <Link
                  href="/ai-assistant"
                  className="flex items-center gap-2 rounded-full border-2 border-rose/30 px-6 py-3 text-sm font-bold text-rose-deep transition hover:bg-rose-soft active:scale-95"
                >
                  صفحه دستیار هوشمند
                </Link>
              </div>
            </div>
          </Reveal>

          {/* جراح هوشمند */}
          <Reveal delay={200}>
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-gold-soft/40 to-ivory p-8 shadow-card transition hover:shadow-soft">
              <div className="pointer-events-none absolute -right-16 -bottom-16 size-48 rounded-full bg-gold/15 blur-2xl transition group-hover:bg-gold/25" />
              <span className="grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-gold to-[#a87b3d] text-white shadow-card">
                <IconRobot className="size-8" />
              </span>
              <h3 className="mt-5 text-2xl font-black text-ink">
                جراح هوشمند آبین
              </h3>
              <p className="mt-3 leading-8 text-ink-soft">
                با چند سوال کوتاه، دغدغه‌ی اصلی چهره‌تان را مشخص کنید تا جراح
                هوشمند، روش‌های مناسب را با تخمین جلسات، نقاهت و هزینه پیشنهاد دهد.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {[
                  "پیش‌مشاوره‌ی شخصی‌سازی‌شده و رایگان",
                  "پیشنهاد روش بر اساس بودجه و زمان نقاهت",
                  "شبیه‌ساز قبل/بعد برای دیدن نتیجه",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gold-soft text-[#a87b3d]">
                      <IconCheck className="size-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/ai-surgeon"
                  className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-card transition hover:bg-ink-soft active:scale-95"
                >
                  <IconRobot className="size-4 text-gold" />
                  شروع پیش‌مشاوره
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 rounded-full border-2 border-ink/20 px-6 py-3 text-sm font-bold text-ink transition hover:bg-blush active:scale-95"
                >
                  <IconPhone className="size-4" />
                  مشاوره تلفنی
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── چرا آبین ─────────────── */
function WhyUs() {
  const items = [
    {
      icon: IconShield,
      title: "اصالت تضمینی",
      desc: "همه‌ی ژل‌ها، بوتاکس‌ها و بی‌حسی‌ها اورجینال با هولوگرام و کد رهگیری هستند و جلوی شما باز می‌شوند.",
    },
    {
      icon: IconSparkle,
      title: "تجهیزات نسل جدید",
      desc: "لیزر دیود و الکس جدید، HIFU، دستگاه‌های جوان‌سازی و اتاق عمل مجهز — همگی با تأییدیه CE.",
    },
    {
      icon: IconHeart,
      title: "پیگیری واقعی",
      desc: "بعد از هر جلسه، لیست مراقبت تحویل می‌گیرید و تیم ما تا رسیدن به نتیجه‌ی نهایی پیگیری‌تان می‌کند.",
    },
    {
      icon: IconStar,
      title: "پزشک متخصص، نه اپراتور",
      desc: "همه‌ی تزریقات و کارهای تخصصی فقط توسط پزشک با مجوز انجام می‌شود؛ بدون استثنا.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl lg:text-right lg:after:right-0 lg:after:translate-x-0">
              چرا کلینیک آبین؟
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <div className="flex gap-4">
                  <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep p-3.5 text-white shadow-card">
                    <it.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-black text-ink">{it.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-ink-soft">{it.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-bl from-gold/20 to-rose/20 blur-xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/clinic.jpg"
                alt="فضای داخلی کلینیک زیبایی آبین"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="animate-float absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur">
              <span className="text-3xl">🏆</span>
              <div className="leading-tight">
                <div className="text-sm font-black text-ink">کلینیک برتر زیبایی</div>
                <div className="text-[11px] text-ink-soft">انتخاب مراجعین تهران — ۱۴۰۴</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── نظرات ─────────────── */
function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-blush py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl">
            مراجعین ما چه می‌گویند؟
          </h2>
        </Reveal>
      </div>
      <Reveal delay={150}>
        <div className="group relative mt-12 [direction:ltr]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-blush to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-blush to-transparent" />
          <div className="marquee-track gap-5 px-5">
            {row.map((t, i) => (
              <figure
                key={i}
                className="w-[320px] shrink-0 rounded-3xl border border-rose/15 bg-ivory p-6 shadow-card [direction:rtl]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-rose to-gold text-lg font-black text-white">
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <figcaption className="text-sm font-black text-ink">{t.name}</figcaption>
                    <span className="text-[11px] text-ink-soft">{t.service}</span>
                  </div>
                  <span className="ms-auto flex text-gold">
                    {[...Array(5)].map((_, j) => (
                      <IconStar key={j} className="size-3" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-4 text-sm leading-7 text-ink-soft">
                  «{t.text}»
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────── بلاگ ─────────────── */
function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl">
            مجله‌ی زیبایی آبین
          </h2>
          <p className="mt-7 max-w-xl leading-8 text-ink-soft">
            راهنماهای تخصصی مراقبت پوست، معرفی روش‌ها و پاسخ به سوالات پرتکرار —
            نوشته‌ی تیم پزشکی آبین.
          </p>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3 text-sm font-bold text-ink transition hover:bg-blush active:scale-95"
        >
          همه مقالات
          <IconArrowLeft className="size-4" />
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block h-full overflow-hidden rounded-3xl border border-ink/8 bg-white/70 shadow-card transition hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-black leading-7 text-ink transition group-hover:text-rose-deep">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-soft">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-ink-soft">
                  <span>{p.author}</span>
                  <span className="flex items-center gap-1">
                    <IconClock className="size-3.5" />
                    {p.readTime} مطالعه • {p.date}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── سوالات پرتکرار ─────────────── */
function Faq() {
  return (
    <section className="bg-blush py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="deco-line text-3xl font-black text-ink sm:text-4xl">
            سوالات پرتکرار
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── CTA پایانی ─────────────── */
function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-rose-deep via-rose to-rose-deep py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-black sm:text-4xl">
            اولین قدم زیبایی، یک تماس است
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/85">
            مشاوره‌ی اولیه‌ی آبین رایگان است؛ چه تازه تصمیم گرفته باشید و چه
            دنبال کلینیکی مطمئن برای ادامه‌ی مسیرتان باشید. منتظرتان هستیم.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-black text-rose-deep shadow-soft transition hover:scale-105 active:scale-95"
            >
              <IconPhone className="size-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 font-black text-white shadow-soft transition hover:scale-105 active:scale-95"
            >
              <IconWhatsapp className="size-5" />
              گفتگو در واتساپ
            </a>
            <OpenChatButton className="flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-black text-white backdrop-blur transition hover:bg-white/10 hover:scale-105 active:scale-95">
              <IconChat className="size-5" />
              پرسش از دستیار هوشمند
            </OpenChatButton>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-black text-white backdrop-blur transition hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <IconCalendar className="size-5" />
              رزرو آنلاین
            </Link>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
            <IconLocation className="size-4" />
            {site.address}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── صفحه ─────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ContactStrip />
      <Services />
      <Stats />
      <Showcase />
      <AiSection />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
