"use client";

import { useState } from "react";
import { cases } from "@/data/portfolio";
import BeforeAfter from "./BeforeAfter";
import Reveal from "./Reveal";
import { IconClock, IconPhone, IconStar, IconWhatsapp } from "./Icons";
import { site } from "@/lib/site";

export default function PortfolioGrid() {
  const categories = ["همه", ...Array.from(new Set(cases.map((c) => c.category)))];
  const [active, setActive] = useState("همه");

  const filtered =
    active === "همه" ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      {/* فیلتر دسته‌ها */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition active:scale-95 ${
              active === c
                ? "bg-gradient-to-l from-rose to-rose-deep text-white shadow-card"
                : "border border-rose/20 bg-white/70 text-ink-soft hover:border-rose/50 hover:text-rose-deep"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 90}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-rose/15 bg-ivory p-4 shadow-card transition hover:-translate-y-1.5 hover:shadow-soft">
              <BeforeAfter
                before={c.before ?? c.after}
                after={c.after}
                alt={c.title}
                simBefore={!c.before}
                className="aspect-square"
              />
              <div className="flex flex-1 flex-col p-2 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-black text-ink">{c.title}</h3>
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-gold-soft px-2.5 py-1 text-[11px] font-black text-[#a87b3d]">
                    <IconStar className="size-3" />
                    {c.result}
                  </span>
                </div>
                <span className="mt-1 text-[11px] font-bold text-rose-deep">
                  {c.category} • {c.doctor}
                </span>
                <p className="mt-2.5 flex-1 text-sm leading-7 text-ink-soft">{c.desc}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-ink/8 pt-4 text-center">
                  <div>
                    <div className="text-[11px] text-ink-soft">مراجع</div>
                    <div className="mt-0.5 text-xs font-black text-ink">{c.age}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-ink-soft">تعداد جلسه</div>
                    <div className="mt-0.5 text-xs font-black text-ink">{c.sessions}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-ink-soft">نقاهت</div>
                    <div className="mt-0.5 text-xs font-black text-ink">{c.downtime}</div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* یادداشت و CTA */}
      <Reveal className="mt-14">
        <div className="rounded-[2rem] bg-gradient-to-l from-ink to-[#3d2430] p-8 text-center text-white shadow-soft sm:p-10">
          <h3 className="text-xl font-black sm:text-2xl">
            نتیجه‌ی شما هم می‌تواند نمونه‌کار بعدی ما باشد
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-white/70">
            برای دیدن پرونده‌های کامل‌تر (شامل ویدیو و جزئیات درمان) و دریافت پیش‌مشاوره
            اختصاصی، همین حالا اقدام کنید. همه‌ی نمونه‌کارها با رضایت کتبی مراجعین
            منتشر شده‌اند.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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
              className="flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-black transition hover:scale-105 active:scale-95"
            >
              <IconWhatsapp className="size-4" />
              واتساپ آبین
            </a>
            <span className="flex items-center gap-2 text-xs text-white/60">
              <IconClock className="size-4" />
              مشاوره اولیه رایگان — پاسخ در کمتر از چند ساعت
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
