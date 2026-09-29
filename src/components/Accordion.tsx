"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-rose/30 bg-ivory shadow-card"
                : "border-ink/8 bg-white/60 hover:border-rose/20"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-ink">{item.q}</span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-rose text-white" : "bg-rose-soft text-rose-deep"
                }`}
              >
                <IconChevronDown className="size-4" />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-8 text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
