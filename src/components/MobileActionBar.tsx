"use client";

// نوار اکشن چسبان پایین صفحه در موبایل
import Link from "next/link";
import { site } from "@/lib/site";
import { IconCalendar, IconChat, IconPhone, IconWhatsapp } from "./Icons";

export default function MobileActionBar() {
  const openChat = () => window.dispatchEvent(new CustomEvent("open-abin-chat"));

  return (
    <nav
      aria-label="میله ارتباط سریع"
      className="fixed inset-x-0 bottom-0 z-30 glass border-t border-rose/15 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-12px_rgba(90,40,55,0.25)] md:hidden"
    >
      <div className="grid grid-cols-4">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-ink transition active:scale-90"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-l from-rose to-rose-deep text-white">
            <IconPhone className="size-4.5" />
          </span>
          تماس
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-ink transition active:scale-90"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#25d366] text-white">
            <IconWhatsapp className="size-4.5" />
          </span>
          واتساپ
        </a>
        <button
          onClick={openChat}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-ink transition active:scale-90"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-gold">
            <IconChat className="size-4.5" />
          </span>
          دستیار AI
        </button>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-ink transition active:scale-90"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#a87b3d] text-white">
            <IconCalendar className="size-4.5" />
          </span>
          رزرو نوبت
        </Link>
      </div>
    </nav>
  );
}
