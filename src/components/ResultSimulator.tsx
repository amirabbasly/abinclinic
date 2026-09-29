"use client";

import { useState } from "react";
import { cases } from "@/data/portfolio";
import BeforeAfter from "./BeforeAfter";

// شبیه‌ساز تعاملی نتیجه — انتخاب مورد و مقایسه قبل/بعد
export default function ResultSimulator() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active) ?? cases[0];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
        {cases.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition active:scale-95 ${
              active === c.id
                ? "bg-gradient-to-l from-gold to-[#a87b3d] text-ink shadow-card"
                : "border border-gold/30 bg-white/70 text-ink-soft hover:border-gold hover:text-ink"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <BeforeAfter
            key={current.id}
            before={current.before ?? current.after}
            after={current.after}
            alt={current.title}
            simBefore={!current.before}
            beforeLabel="شبیه‌سازی قبل"
            afterLabel="نتیجه مورد انتظار"
          />
        </div>
        <div className="flex flex-col justify-center rounded-3xl border border-gold/25 bg-ivory p-6 shadow-card md:col-span-2">
          <span className="text-xs font-black text-gold">{current.category}</span>
          <h3 className="mt-2 text-xl font-black text-ink">{current.title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{current.desc}</p>
          <dl className="mt-5 space-y-3 border-t border-ink/8 pt-5 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">تعداد جلسات لازم</dt>
              <dd className="font-black text-ink">{current.sessions}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">دوره نقاهت</dt>
              <dd className="font-black text-ink">{current.downtime}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">پزشک مسئول</dt>
              <dd className="font-black text-ink">{current.doctor}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">رضایت مراجعین مشابه</dt>
              <dd className="font-black text-rose-deep">{current.result}</dd>
            </div>
          </dl>
          <p className="mt-5 rounded-2xl bg-gold-soft/50 p-3.5 text-[11px] leading-6 text-ink-soft">
            💡 این تصاویر نمونه‌ی نتایج واقعی مراجعین آبین است. نتیجه‌ی دقیق شما پس
            از آنالیز حضوری چهره مشخص می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}
