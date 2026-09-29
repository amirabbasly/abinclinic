"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type PointerEvent } from "react";

// اسلایدر تعاملی قبل / بعد — قابل کشیدن با لمس و ماوس
export default function BeforeAfter({
  before,
  after,
  alt,
  className = "",
  beforeLabel = "قبل",
  afterLabel = "بعد",
  simBefore = false,
}: {
  before: string;
  after: string;
  alt: string;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
  simBefore?: boolean; // شبیه‌سازی «قبل» با فیلتر
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    update(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging) update(e.clientX);
  };

  return (
    <div
      ref={ref}
      dir="ltr"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      className={`ba-handle group relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl bg-ink ${className}`}
    >
      {/* تصویر بعد (پایه) */}
      <Image
        src={after}
        alt={`${alt} — بعد`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        draggable={false}
      />
      <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-l from-rose to-rose-deep px-3 py-1 text-xs font-bold text-white shadow-card">
        {afterLabel}
      </span>

      {/* تصویر قبل — سمت راستِ دستگیره (چیدمان راست‌به‌چپ) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={before}
          alt={`${alt} — قبل`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${simBefore ? "img-before-sim" : ""}`}
          draggable={false}
        />
      </div>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
        {beforeLabel}
      </span>

      {/* دستگیره */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/95 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div
          className={`absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-white/20 backdrop-blur-md transition-transform ${
            dragging ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <span className="flex items-center text-rose-deep">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
