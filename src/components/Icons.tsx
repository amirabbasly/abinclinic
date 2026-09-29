import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconSyringe = (p: P) => (
  <svg {...base(p)}>
    <path d="M18 2l4 4M17 7l3-3M19 5L9 15l-4 1-2 5 5-2 1-4 10-10z" />
    <path d="M11 13l2 2M14 10l2 2" />
  </svg>
);
export const IconSparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3z" />
    <path d="M19 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1zM5 16l.7 1.6L7.3 18l-1.6.7L5 20.3l-.7-1.6L2.7 18l1.6-.7L5 16z" />
  </svg>
);
export const IconThread = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20c4-1 5-3 5-6s-2-4 0-7 5-3 7-3" />
    <path d="M12 7l4 4M16 4l4 4M9 10l3 3" strokeDasharray="0.5 3" />
    <circle cx="4" cy="20" r="1.6" />
  </svg>
);
export const IconLaser = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);
export const IconDrop = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3s6 6.3 6 10.4A6 6 0 0 1 6 13.4C6 9.3 12 3 12 3z" />
    <path d="M9.5 13.5a2.6 2.6 0 0 0 2.5 2.6" />
  </svg>
);
export const IconWater = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 7c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2M3 13c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2M3 19c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2" />
  </svg>
);
export const IconBrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 9c3-2 6-2 9-1s6 1 9-1" strokeWidth="2.4" />
    <path d="M4.5 15c2.5-1.2 5-1.2 7.5-.4s5 .6 7.5-.8" />
    <path d="M7 6.5C8 5 10 4.5 12 5M17 6.5C16 5 14 4.5 12 5" />
  </svg>
);
export const IconNose = (p: P) => (
  <svg {...base(p)}>
    <path d="M13 3c0 4-4 6-5 9-.9 2.7.5 5 2.5 6" />
    <path d="M10.5 18c-1.8-.8-3-2.5-2.8-4.6C7.9 11 9 9.5 10 8" />
    <path d="M12.5 21c1.5-.5 2.5-1.8 2.5-3.5" />
  </svg>
);
export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
export const IconWhatsapp = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .99.98-2.9-.2-.3a8.2 8.2 0 1 1 6.6 3.5zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7a10 10 0 0 0 4 3.5c1.9.7 1.9.5 2.3.4.4 0 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.4-.1z" />
  </svg>
);
export const IconTelegram = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.9 4.6 19 19.3c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6L18.6 7c.4-.3-.1-.5-.6-.2L7.7 13.2l-4.4-1.4c-1-.3-1-1 .2-1.4L20.5 3.3c.8-.3 1.5.2 1.4 1.3z" />
  </svg>
);
export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="M3 7.5l8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7.5" />
  </svg>
);
export const IconLocation = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);
export const IconChat = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.6-.3-3.7-.8L3 21l1.3-5.8A8.5 8.5 0 1 1 21 12z" />
    <path d="M8.5 11.5h7M8.5 14.5h4" />
  </svg>
);
export const IconRobot = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="8" width="16" height="11" rx="3.5" />
    <path d="M12 8V4.5M9.5 4.5h5" />
    <circle cx="9" cy="13" r="1.2" fill="currentColor" />
    <circle cx="15" cy="13" r="1.2" fill="currentColor" />
    <path d="M9.8 16.2c1.4 1 3 1 4.4 0" />
    <path d="M2 12.5v2M22 12.5v2" />
  </svg>
);
export const IconArrowLeft = (p: P) => (
  <svg {...base(p)}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);
export const IconStar = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
  </svg>
);
export const IconMenu = (p: P) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M4 6h16M4 12h10M4 18h16" />
  </svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IconChevronDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2.5l7.5 3v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10v-6l7.5-3z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
);
export const IconHeart = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20.5S3.5 15.5 3.5 9.3A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.5 2.9c0 6.2-8.5 11.2-8.5 11.2z" />
  </svg>
);
export const IconSend = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 3L10.5 13.5M21 3l-7 18-3.5-7.5L3 10l18-7z" />
  </svg>
);
export const IconCalendar = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M8 3v4M16 3v4M3 10h18M8.5 14.5h7" />
  </svg>
);

export const serviceIcon: Record<string, (p: P) => React.JSX.Element> = {
  syringe: IconSyringe,
  sparkle: IconSparkle,
  thread: IconThread,
  laser: IconLaser,
  drop: IconDrop,
  water: IconWater,
  brow: IconBrow,
  nose: IconNose,
};
