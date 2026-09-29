export type Case = {
  id: string;
  title: string;
  category: string;
  desc: string;
  after: string;
  before?: string; // اگر تصویر «قبل» جداگانه نبود، با فیلتر شبیه‌سازی می‌شود
  age: string;
  sessions: string;
  downtime: string;
  doctor: string;
  result: string;
};

export const cases: Case[] = [
  {
    id: "lips",
    title: "فیلر لب هالیوودی",
    category: "تزریق ژل و فیلر",
    desc: "حجم‌دهی طبیعی لب بالا و پایین با ژل هیالورونیک اسید و تکنیک روسی؛ حفظ تناسب کامل با فرم صورت.",
    after: "/images/case-lips.jpg",
    age: "۲۷ ساله",
    sessions: "۱ جلسه",
    downtime: "۲ روز تورم خفیف",
    doctor: "دکتر آرش آبین",
    result: "۹۸٪ رضایت",
  },
  {
    id: "thread",
    title: "لیفت با نخ PDO",
    category: "لیفت و جوان‌سازی",
    desc: "لیفت افتادگی گونه و خط فک با ۱۲ نخ PDO؛ نتیجه‌ی طبیعی بدون تغییر در فرم صورت.",
    after: "/images/case-thread.jpg",
    age: "۳۹ ساله",
    sessions: "۱ جلسه",
    downtime: "۳ روز",
    doctor: "دکتر آرش آبین",
    result: "۹۵٪ رضایت",
  },
  {
    id: "brows",
    title: "میکروبلیدینگ ابرو",
    category: "میکروبلیدینگ و تاتو",
    desc: "طراحی و هاشور ابرو به سبک کره‌ای با پیگمنت ارگانیک؛ فرم‌دهی کاملاً متناسب با استخوان‌بندی صورت.",
    after: "/images/case-brows.jpg",
    age: "۳۱ ساله",
    sessions: "۲ جلسه",
    downtime: "۵ روز پوسته‌ریزی",
    doctor: "دکتر سارا محمدی",
    result: "۹۷٪ رضایت",
  },
  {
    id: "laser",
    title: "لیزر موهای زائد",
    category: "لیزر",
    desc: "لیزر کامل صورت و بدن با دستگاه دیود؛ نتیجه پس از ۴ جلسه، ریزش دائمی ۸۵ درصدی فولیکول‌ها.",
    after: "/images/case-laser.jpg",
    age: "۲۴ ساله",
    sessions: "۴ جلسه",
    downtime: "بدون نقاهت",
    doctor: "دکتر نگار رستمی",
    result: "۹۶٪ رضایت",
  },
  {
    id: "botox",
    title: "بوتاکس پیشانی و خط خنده",
    category: "بوتاکس",
    desc: "رفع خطوط پیشانی و گاو‌بازی با بوتاکس اورجینال؛ نتیجه کاملاً طبیعی بدون یخ‌زدگی چهره.",
    after: "/images/case-botox.jpg",
    age: "۳۵ ساله",
    sessions: "۱ جلسه",
    downtime: "بدون نقاهت",
    doctor: "دکتر آرش آبین",
    result: "۹۹٪ رضایت",
  },
  {
    id: "glow",
    title: "مزوتراپی و درخشش پوست",
    category: "پوست و جوان‌سازی",
    desc: "کوکتل ویتامین و هیالورونیک اسید برای آبرسانی و رفع کدری پوست؛ درخشش قابل‌توجه از جلسه دوم.",
    after: "/images/case-glow.jpg",
    age: "۲۹ ساله",
    sessions: "۳ جلسه",
    downtime: "۱ روز قرمزی خفیف",
    doctor: "دکتر نگار رستمی",
    result: "۹۴٪ رضایت",
  },
];
