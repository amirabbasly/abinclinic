import Link from "next/link";
import { IconArrowLeft, IconLocation } from "./Icons";
import { site } from "@/lib/site";

// سربرگ مشترک صفحات داخلی
export default function PageHero({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-grain relative overflow-hidden border-b border-rose/10">
      <div className="pointer-events-none absolute -top-24 left-1/3 size-72 rounded-full bg-rose-soft blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 size-72 rounded-full bg-gold-soft blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <nav className="mb-5 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
          <Link href="/" className="transition hover:text-rose-deep">
            خانه
          </Link>
          <IconArrowLeft className="size-3.5" />
          <span className="font-bold text-rose-deep">{title}</span>
        </nav>
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1.5 text-xs font-bold text-ink">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-black leading-snug text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-ink-soft">{subtitle}</p>
        )}
        {children}
        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-soft">
          <IconLocation className="size-4 text-rose" />
          {site.addressShort} — تماس: {site.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
