import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description:
    "گالری قبل و بعد کلینیک زیبایی آبین؛ فیلر لب، لیفت با نخ، بوتاکس، میکروبلیدینگ، لیزر و جوان‌سازی پوست — با اسلایدر تعاملی قبل/بعد.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        badge="گالری نتایج"
        title="نمونه‌کارهای کلینیک آبین"
        subtitle="دستگیره‌ی اسلایدر را بکشید تا تفاوت قبل و بعد را ببینید. همه‌ی موارد توسط تیم پزشکی آبین و با رضایت مراجعین انجام و منتشر شده است."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <PortfolioGrid />
      </section>
    </>
  );
}
