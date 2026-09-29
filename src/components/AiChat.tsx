"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getBotReply, welcomeMessage, type BotReply } from "@/lib/chatEngine";
import { site } from "@/lib/site";
import { IconClose, IconRobot, IconSend, IconWhatsapp } from "./Icons";

type Msg = { role: "bot" | "user"; text: string };

// چیپ‌هایی که به‌جای پیام، لینک هستند
const chipLinks: Record<string, string> = {
  "مشاوره با جراح هوشمند": "/ai-surgeon",
  "نمونه کارها": "/portfolio",
  "درباره ما": "/about",
  "درباره دکتر آبین": "/about",
  "مقالات مراقبتی": "/blog/aftercare-filler",
  "تماس با کلینیک": `tel:${site.phoneTel}`,
  "رزرو آنلاین": "/contact",
};

function useChat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: welcomeMessage.text },
  ]);
  const [chips, setChips] = useState<string[]>(welcomeMessage.chips ?? []);
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const send = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setChips([]);
    setTyping(true);
    const reply: BotReply = getBotReply(text);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: reply.text }]);
      if (reply.chips?.length) setChips(reply.chips);
    }, 650 + Math.random() * 700);
  }, []);

  return { messages, chips, typing, send };
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-tr-sm bg-white px-4 py-3 shadow-card">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-2 rounded-full bg-rose/60 animate-blink"
          style={{ animationDelay: `${i * 180}ms` }}
        />
      ))}
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isBot = msg.role === "bot";
  return (
    <div className={`chat-bubble-in flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-7 shadow-card ${
          isBot
            ? "rounded-tr-sm bg-white text-ink"
            : "rounded-tl-sm bg-gradient-to-l from-rose to-rose-deep text-white"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

function ChatBody({
  messages,
  chips,
  typing,
  send,
  input,
  setInput,
}: ReturnType<typeof useChat> & {
  input: string;
  setInput: (v: string) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  return (
    <>
      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <Bubble key={i} msg={m} />
        ))}
        {typing && <TypingDots />}
      </div>

      <div className="border-t border-rose/10 bg-ivory p-3">
        {chips.length > 0 && (
          <div className="mb-2.5 flex flex-wrap gap-2">
            {chips.map((c) => {
              const href = chipLinks[c];
              if (href) {
                return (
                  <Link
                    key={c}
                    href={href}
                    className="rounded-full border border-gold/50 bg-gold-soft/70 px-3.5 py-1.5 text-xs font-bold text-ink transition hover:bg-gold-soft"
                  >
                    {c}
                  </Link>
                );
              }
              return (
                <button
                  key={c}
                  onClick={() => send(c)}
                  className="rounded-full border border-rose/25 bg-rose-soft/60 px-3.5 py-1.5 text-xs font-bold text-rose-deep transition hover:bg-rose-soft"
                >
                  {c}
                </button>
              );
            })}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
            setInput("");
          }}
          className="flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="سوالتون رو بنویسید…"
            className="h-12 flex-1 rounded-2xl border border-rose/20 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink-soft/50 focus:border-rose focus:ring-4 focus:ring-rose/10"
          />
          <button
            type="submit"
            aria-label="ارسال"
            className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-l from-rose to-rose-deep text-white shadow-card transition hover:shadow-glow active:scale-90"
          >
            <IconSend className="size-5 -scale-x-100" />
          </button>
        </form>
      </div>
    </>
  );
}

function ChatHeader({ title, onClose }: { title: string; onClose?: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-gradient-to-l from-ink to-[#3d2830] px-4 py-3.5 text-white">
      <div className="flex items-center gap-3">
        <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-rose to-gold text-white">
          <IconRobot className="size-5" />
          <span className="absolute -bottom-0.5 -left-0.5 size-3 rounded-full border-2 border-ink bg-emerald-400" />
        </span>
        <div className="leading-tight">
          <div className="text-sm font-black">{title}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            آنلاین — پاسخ فوری
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="گفتگو در واتساپ"
          className="grid size-9 place-items-center rounded-xl bg-[#25d366]/90 transition hover:bg-[#25d366]"
        >
          <IconWhatsapp className="size-4.5" />
        </a>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="بستن چت"
            className="grid size-9 place-items-center rounded-xl bg-white/10 transition hover:bg-white/20"
          >
            <IconClose className="size-4.5" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── نسخه صفحه‌ی کامل (صفحه دستیار هوشمند) ───
export function AiChatPage() {
  const chat = useChat();
  const [input, setInput] = useState("");

  return (
    <div className="overflow-hidden rounded-3xl border border-rose/15 bg-blush shadow-soft">
      <div className="flex h-[68vh] min-h-[480px] flex-col">
        <ChatHeader title="آبینا — دستیار هوشمند کلینیک" />
        <ChatBody {...chat} input={input} setInput={setInput} />
      </div>
    </div>
  );
}

// ─── نسخه شناور (در همه صفحات) ───
export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const chat = useChat();
  const [input, setInput] = useState("");

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-abin-chat", openChat);
    return () => window.removeEventListener("open-abin-chat", openChat);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* دکمه شناور */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="گفتگو با دستیار هوشمند آبینا"
        className={`fixed bottom-24 left-4 z-40 flex items-center gap-2.5 rounded-full bg-gradient-to-l from-rose to-rose-deep py-3.5 pe-5 ps-4 text-white shadow-soft transition-all duration-300 hover:shadow-glow active:scale-95 md:bottom-6 ${
          open ? "pointer-events-none translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span className="relative">
          <IconRobot className="size-6" />
          <span className="absolute -top-1 -right-1 size-2.5 rounded-full border-2 border-rose-deep bg-emerald-400" />
        </span>
        <span className="text-sm font-bold">دستیار هوشمند</span>
      </button>

      {/* پنل چت */}
      <div
        className={`fixed inset-0 z-50 md:inset-auto md:bottom-6 md:left-6 ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-3 bottom-3 top-14 flex flex-col overflow-hidden rounded-3xl border border-rose/15 bg-blush shadow-soft transition-all duration-300 md:inset-auto md:h-[560px] md:max-h-[75vh] md:w-[400px] ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-95 opacity-0"
          }`}
        >
          <ChatHeader title="آبینا" onClose={() => setOpen(false)} />
          <ChatBody {...chat} input={input} setInput={setInput} />
        </div>
      </div>
    </>
  );
}
