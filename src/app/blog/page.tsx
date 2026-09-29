import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/blog";
import { site } from "@/lib/site";
import { IconArrowLeft, IconClock, IconPhone, IconWhatsapp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "بلاگ و مجله زیبایی",
  description:
    "مجله‌ی تخصصی زیبایی کلینیک آبین؛ راهنمای مراقبت پوست، معرفی روش‌های جوان‌سازی، فیلر، بوتاکس، لیزر و پاسخ به سوالات پرتکرار.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        badge="مجله‌ی آبین"
        title="بلاگ زیبایی و سلامت پوست"
        subtitle="مقالات تخصصی تیم پزشکی آبین؛ علمی، ساده و کاربردی — برای اینکه بهترین تصمیم را برای پوست و زیبایی‌تان بگیرید."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        {/* مقاله ویژه */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-rose/15 bg-ivory shadow-card transition hover:shadow-soft md:grid-cols-2"
          >
            <div className="relative min-h-64 overflow-hidden">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 rounded-full bg-gradient-to-l from-rose to-rose-deep px-4 py-1.5 text-xs font-bold text-white">
                مقاله‌ی ویژه
              </span>
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="text-xs font-black text-gold">{featured.category}</span>
              <h2 className="mt-3 text-2xl font-black leading-relaxed text-ink transition group-hover:text-rose-deep">
                {featured.title}
              </h2>
              <p className="mt-3 leading-8 text-ink-soft">{featured.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-ink-soft">
                <span className="font-bold">{featured.author}</span>
                <span className="flex items-center gap-1">
                  <IconClock className="size-4" />
                  {featured.readTime} مطالعه • {featured.date}
                </span>
              </div>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-rose-soft px-5 py-2.5 text-sm font-bold text-rose-deep transition group-hover:bg-rose group-hover:text-white">
                خواندن مقاله
                <IconArrowLeft className="size-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* بقیه مقالات */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white/70 shadow-card transition hover:-translate-y-1.5 hover:shadow-soft"
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
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-black leading-7 text-ink transition group-hover:text-rose-deep">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft line-clamp-3">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-ink/8 pt-4 text-[11px] text-ink-soft">
                    <span>{p.author}</span>
                    <span className="flex items-center gap-1">
                      <IconClock className="size-3.5" />
                      {p.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-gradient-to-l from-rose-deep via-rose to-rose-deep p-8 text-center text-white shadow-soft sm:p-10 md:flex-row md:text-right">
            <div>
              <h3 className="text-xl font-black">سوال تخصصی دارید؟</h3>
              <p className="mt-2 text-sm text-white/85">
                از دستیار هوشمند آبینا بپرسید یا مستقیم با پزشکان ما گفتگو کنید.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-rose-deep transition hover:scale-105 active:scale-95"
              >
                <IconPhone className="size-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-black transition hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                <IconWhatsapp className="size-4" />
                واتساپ
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
