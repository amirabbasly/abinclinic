import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { doctors, stats } from "@/data/services";
import { site } from "@/lib/site";
import {
  IconArrowLeft,
  IconCalendar,
  IconCheck,
  IconHeart,
  IconPhone,
  IconRobot,
  IconShield,
  IconSparkle,
  IconWhatsapp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "آشنایی با کلینیک زیبایی آبین؛ داستان، ارزش‌ها و تیم تخصصی ما — بیش از ۱۲ سال تجربه در زیبایی، جوان‌سازی و جراحی پلاستیک.",
};

const values = [
  {
    icon: IconShield,
    title: "امنیت و اصالت",
    desc: "هیچ بهانه‌ای برای مواد غیراورجینال وجود ندارد. سلامت شما خط قرمز ماست.",
  },
  {
    icon: IconSparkle,
    title: "طبیعی بودن نتیجه",
    desc: "زیبایی که در چهره‌تان «دیگران» متوجه آن نشوند اما همه احساسش کنند؛ این هنر ماست.",
  },
  {
    icon: IconHeart,
    title: "همراهی کامل",
    desc: "از اولین مشاوره تا آخرین جلسه‌ی کنترل، یک تیم ثابت پاسخگوی شماست.",
  },
];

const timeline = [
  {
    year: "۱۳۹۳",
    title: "آغاز با یک مطب کوچک",
    desc: "دکتر آرش آبین کار را با یک مطب کوچک در ولیعصر و یک باور بزرگ شروع کرد: زیبایی باید در دسترس و مطمئن باشد.",
  },
  {
    year: "۱۳۹۶",
    title: "راه‌اندازی بخش لیزر",
    desc: "با ورود اولین دستگاه لیزر دیود، آبین به یکی از پیشگامان لیزر بدون درد در تهران تبدیل شد.",
  },
  {
    year: "۱۳۹۸",
    title: "کلینیک تخصصی آبین",
    desc: "افتتاح کلینیک ۴۰۰ متری در برج آبین با اتاق عمل مجهز، بخش جوان‌سازی و تیم کامل متخصصین.",
  },
  {
    year: "۱۴۰۲",
    title: "ورود به دنیای هوش مصنوعی",
    desc: "راه‌اندازی آنالیز چهره با هوش مصنوعی و پیش‌مشاوره‌ی آنلاین؛ آبین یکی از اولین کلینیک‌های هوشمند کشور شد.",
  },
  {
    year: "۱۴۰۴",
    title: "کلینیک برتر زیبایی",
    desc: "انتخاب مراجعین به‌عنوان کلینیک برتر زیبایی تهران و افتتاح بخش شبانه‌روزی پشتیبانی آنلاین.",
  },
];

const certs = [
  "عضو انجمن جراحان پلاستیک ایران",
  "تأییدیه وزارت بهداشت برای کلیه خدمات",
  "مواد تزریقی با کد رهگیری اصالت",
  "دستگاه‌های دارای تأییدیه CE اروپا",
  "مجوز اتاق عمل استریل و استاندارد",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="درباره کلینیک آبین"
        title="ما زیبایی را علم می‌دانیم، اما با هنر انجامش می‌دهیم"
        subtitle="از یک مطب کوچک در سال ۱۳۹۳ تا یکی از معتبرترین کلینیک‌های زیبایی تهران؛ داستان آبین، داستان اعتماد هزاران مراجع است."
      />

      {/* داستان */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-rose/20 to-gold/20 blur-xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/clinic.jpg"
                  alt="فضای کلینیک زیبایی آبین"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="animate-float absolute -bottom-5 left-6 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur">
                <div className="text-2xl font-black text-rose-deep">
                  <Counter value={12} suffix="+" />
                </div>
                <div className="text-[11px] text-ink-soft">سال تجربه تخصصی</div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-2xl font-black leading-relaxed text-ink sm:text-3xl">
                داستان آبین؛ از یک باور ساده شروع شد
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-5 space-y-4 leading-8 text-ink-soft">
                <p>
                  سال ۱۳۹۳، دکتر آرش آبین با یک مشاهده‌ی ساده کارش را شروع کرد:
                  مردم برای زیبایی، گاهی سلامتشان را به خطر می‌انداختند. کلینیک‌های
                  بی‌مجوز، مواد تقلبی و اپراتورهای بدون آموزش، اعتماد را سخت کرده
                  بود.
                </p>
                <p>
                  آبین با یک وعده متولد شد: <b className="text-ink">هر تزریق، با ماده‌ی اورجینال، توسط پزشک متخصص و با احترام به چهره‌ی شما.</b>{" "}
                  امروز پس از بیش از یک دهه، هزاران مراجع و صدها نمونه‌کار موفق،
                  همین وعده هنوز خط قرمز ماست.
                </p>
                <p>
                  در کنار خدمات کلاسیک، آبین از سال ۱۴۰۲ پا به دنیای هوش مصنوعی
                  گذاشت؛ آنالیز چهره، پیش‌مشاوره‌ی هوشمند و شبیه‌سازی نتیجه، تجربه‌ی
                  زیبایی را برای شما شفاف‌تر و مطمئن‌تر کرده است.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-6 py-3 text-sm font-bold text-white shadow-card transition hover:shadow-glow active:scale-95"
                >
                  دیدن نمونه‌کارها
                  <IconArrowLeft className="size-4" />
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-ink-soft active:scale-95"
                >
                  <IconPhone className="size-4 text-gold" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ارزش‌ها */}
      <section className="bg-blush py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="deco-line text-2xl font-black text-ink sm:text-3xl">
              ارزش‌هایی که رهایشان نمی‌کنیم
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-rose/15 bg-ivory p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-white">
                    <v.icon className="size-7" />
                  </span>
                  <h3 className="mt-4 font-black text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* تایم‌لاین */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal className="text-center">
          <h2 className="deco-line text-2xl font-black text-ink sm:text-3xl">
            مسیر آبین در یک نگاه
          </h2>
        </Reveal>
        <div className="relative mt-12 space-y-8 before:absolute before:bottom-2 before:right-[19px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-rose before:to-gold sm:before:right-1/2">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 80}>
              <div
                className={`relative flex gap-6 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:mr-auto sm:pr-10 sm:text-left"
                    : "sm:ml-auto sm:pl-10"
                }`}
              >
                <span
                  className={`absolute top-4 grid size-10 place-items-center rounded-full bg-gradient-to-br from-rose to-rose-deep text-[11px] font-black text-white shadow-card sm:hidden ${
                    i % 2 === 0 ? "right-0" : "right-0"
                  }`}
                >
                  {t.year.slice(2)}
                </span>
                <span
                  className={`absolute top-4 hidden size-10 place-items-center rounded-full bg-gradient-to-br from-rose to-rose-deep text-[11px] font-black text-white shadow-card sm:grid ${
                    i % 2 === 0 ? "-right-5" : "-left-5"
                  }`}
                >
                  {t.year.slice(2)}
                </span>
                <div className="ms-14 w-full rounded-3xl border border-ink/8 bg-white/70 p-5 shadow-card sm:ms-0">
                  <span className="text-xs font-black text-gold">{t.year}</span>
                  <h3 className="mt-1 font-black text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* تیم */}
      <section className="bg-blush py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="deco-line text-2xl font-black text-ink sm:text-3xl">
              تیم تخصصی آبین
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-ink-soft">
              هر عضو تیم، مجوز و مدرک تخصصی خود را در دیپلمای کلینیک دارد و می‌توانید
              پیش از شروع کار ملاقات کنید.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {doctors.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-rose/15 bg-ivory p-7 text-center shadow-card transition hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="relative mx-auto size-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose via-gold to-rose-deep opacity-90 blur-[2px] transition group-hover:blur-0" />
                    <div className="absolute inset-1.5 grid place-items-center rounded-full bg-ivory text-3xl font-black text-rose-deep">
                      {d.initials}
                    </div>
                  </div>
                  <h3 className="mt-5 font-black text-ink">{d.name}</h3>
                  <p className="mt-1 text-xs font-bold text-gold">{d.role}</p>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">{d.exp}</p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-soft px-5 py-2.5 text-xs font-bold text-rose-deep transition hover:bg-rose hover:text-white"
                  >
                    <IconCalendar className="size-4" />
                    درخواست نوبت از {d.name.split(" ")[1]}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* آمار + گواهی‌ها */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-to-l from-ink to-[#3d2430] p-8 text-white shadow-soft">
              <h3 className="text-xl font-black">آبین در اعداد</h3>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white/5 p-4 text-center">
                    <div className="text-2xl font-black text-golden sm:text-3xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/ai-surgeon"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold transition hover:bg-white/20"
                >
                  <IconRobot className="size-4 text-gold" />
                  آشنایی با جراح هوشمند
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-xs font-bold transition hover:brightness-110"
                >
                  <IconWhatsapp className="size-4" />
                  گفتگو در واتساپ
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-gold/30 bg-gradient-to-b from-gold-soft/40 to-ivory p-8 shadow-card">
              <h3 className="text-xl font-black text-ink">مجوزها و گواهی‌ها</h3>
              <ul className="mt-6 space-y-4">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-7 text-ink">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-[#a87b3d] text-white">
                      <IconCheck className="size-3.5" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-white/60 p-4 text-xs leading-6 text-ink-soft">
                برای مشاهده‌ی حضوری مجوزها و دیپلمای پزشکان، کافی است در ساعات کاری به
                کلینیک مراجعه کنید؛ با کمال میل در معرض نمایش شماست.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
