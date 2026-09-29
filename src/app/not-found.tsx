import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrowLeft, IconPhone } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="bg-grain flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="relative">
        <span className="text-[7rem] font-black leading-none text-rose-soft">۴۰۴</span>
        <span className="absolute inset-x-0 bottom-4 mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-rose to-rose-deep text-2xl shadow-card">
          💔
        </span>
      </div>
      <h1 className="mt-6 text-2xl font-black text-ink">
        اوه! این صفحه زیبایی که دنبالش بودید پیدا نشد
      </h1>
      <p className="mt-3 max-w-md text-sm leading-8 text-ink-soft">
        شاید آدرس اشتباه باشد یا صفحه جابه‌جا شده باشد. از دکمه‌های زیر استفاده کنید
        یا با پشتیبانی آبین در تماس باشید.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-gradient-to-l from-rose to-rose-deep px-7 py-3.5 font-bold text-white shadow-card transition hover:shadow-glow active:scale-95"
        >
          <IconArrowLeft className="size-5 rotate-180" />
          بازگشت به خانه
        </Link>
        <a
          href={`tel:${site.phoneTel}`}
          className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white shadow-card transition hover:bg-ink-soft active:scale-95"
        >
          <IconPhone className="size-5 text-gold" />
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
