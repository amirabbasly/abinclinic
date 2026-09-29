"use client";

import type { ReactNode } from "react";

// دکمه‌ای که چت شناور دستیار هوشمند را باز می‌کند
export default function OpenChatButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-abin-chat"))}
      className={`transition active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
