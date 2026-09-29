import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/blog";
import { site } from "@/lib/site";
import OpenChatButton from "@/components/OpenChatButton";
import {
  IconArrowLeft,
  IconChat,
  IconClock,
  IconLocation,
  IconPhone,
  IconWhatsapp,
} from "@/components/Icons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-ivory">
      {/* سربرگ مقاله */}
      <header className="bg-grain relative overflow-hidden border-b border-rose/10">
        <div className="pointer-events-none absolute -top-24 left-1/3 size-72 rounded-full bg-rose-soft blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-ink-soft">
            <Link href="/" className="transition hover:text-rose-deep">
              خانه
            </Link>
            <IconArrowLeft className="size-3.5" />
            <Link href="/blog" className="transition hover:text-rose-deep">
              بلاگ
            </Link>
            <IconArrowLeft className="size-3.5" />
            <span className="font-bold text-rose-deep">{post.category}</span>
          </nav>
          <h1 className="text-2xl font-black leading-[1.5] text-ink sm:text-4xl sm:leading-[1.5]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-rose to-gold text-xs font-black text-white">
                آ
              </span>
              <b className="text-ink">{post.author}</b>
            </span>
            <span className="flex items-center gap-1.5">
              <IconClock className="size-4" />
              {post.readTime} مطالعه
            </span>
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* تصویر شاخص */}
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* خلاصه */}
        <Reveal delay={80}>
          <p className="mt-8 rounded-2xl border-r-4 border-gold bg-gold-soft/40 p-5 leading-8 text-ink">
            {post.excerpt}
          </p>
        </Reveal>

        {/* بدنه مقاله */}
        <div className="mt-8 space-y-6">
          {post.content.map((block, i) => (
            <Reveal key={i} delay={30}>
              {block.h && (
                <h2 className="flex items-center gap-3 pt-4 text-xl font-black text-ink">
                  <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-rose to-gold" />
                  {block.h}
                </h2>
              )}
              {block.p && <p className="leading-9 text-ink-soft">{block.p}</p>}
              {block.list && (
                <ul className="space-y-3 rounded-3xl border border-rose/15 bg-white/70 p-6">
                  {block.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 leading-8 text-ink-soft">
                      <span className="mt-2.5 grid size-5 shrink-0 place-items-center rounded-full bg-rose-soft text-rose-deep">
                        <IconArrowLeft className="size-3" />
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* هشدار پزشکی */}
        <div className="mt-10 rounded-3xl border border-gold/40 bg-gold-soft/40 p-6 text-sm leading-8 text-ink">
          <b>⚠️ یادآوری مهم:</b> این مقاله جنبه‌ی آموزشی دارد و جایگزین معاینه و
          توصیه‌ی پزشک نیست. برای دریافت برنامه‌ی اختصاصی خودتان، مشاوره‌ی رایگان
          آبین را رزرو کنید.
        </div>

        {/* CTA */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-rose to-rose-deep px-6 py-4 font-bold text-white shadow-card transition hover:shadow-glow active:scale-95"
          >
            <IconPhone className="size-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-6 py-4 font-bold text-white shadow-card transition hover:brightness-105 active:scale-95"
          >
            <IconWhatsapp className="size-5" />
            پرسش در واتساپ
          </a>
          <OpenChatButton className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-white shadow-card transition hover:bg-ink-soft active:scale-95">
            <IconChat className="size-5 text-gold" />
            پرسش از آبینا 🤖
          </OpenChatButton>
        </div>

        {/* مقالات مرتبط */}
        <div className="mt-14">
          <h3 className="text-xl font-black text-ink">مقالات مرتبط</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex gap-4 rounded-3xl border border-ink/8 bg-white/70 p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="96px"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black text-gold">{p.category}</span>
                  <h4 className="mt-1 text-sm font-black leading-6 text-ink transition group-hover:text-rose-deep">
                    {p.title}
                  </h4>
                  <span className="mt-2 flex items-center gap-1 text-[11px] text-ink-soft">
                    <IconClock className="size-3" />
                    {p.readTime} مطالعه
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-ink-soft">
          <IconLocation className="size-4 text-rose" />
          {site.address}
        </p>
      </div>
    </article>
  );
}
