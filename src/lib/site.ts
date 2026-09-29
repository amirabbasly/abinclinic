// ─── پیکربندی کلینیک آبین ────────────────────────────────────────
export const site = {
  name: "کلینیک زیبایی آبین",
  shortName: "آبین",
  nameEn: "Abin Clinic",
  slogan: "جایی که زیبایی، هنر و علم به هم می‌رسند",
  description:
    "کلینیک زیبایی آبین؛ مرکز تخصصی زیبایی پوست، مو و صورت با بیش از ۱۲ سال تجربه، تجهیزات روز دنیا و تیم متخصصین مجرب. رزرو مشاوره رایگان: ۰۹۱۲۳۰۲۲۰۶۴",

  // اطلاعات تماس
  phoneDisplay: "۰۹۱۲ ۳۰۲ ۲۰۶۴",
  phoneRaw: "09123022064",
  phoneTel: "+989123022064",
  whatsapp: "https://wa.me/989123022064",
  telegram: "https://t.me/abinclinic",
  instagram: "https://instagram.com/abinclinic",
  email: "info@abinclinic.ir",

  address: "تهران، خیابان ولیعصر، نرسیده به پارک‌وی، برج آبین، طبقه چهارم، واحد ۸",
  addressShort: "تهران، ولیعصر، برج آبین",

  hours: [
    { day: "شنبه تا چهارشنبه", time: "۱۰:۰۰ تا ۲۰:۰۰" },
    { day: "پنجشنبه", time: "۱۰:۰۰ تا ۱۸:۰۰" },
    { day: "جمعه", time: "فقط با نوبت قبلی" },
  ],

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Tehran+Valiasr+Street",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=51.3835%2C35.7385%2C51.4125%2C35.7595&layer=mapnik&marker=35.749%2C51.398",
};

export const faDigits = (input: string | number): string =>
  String(input).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
