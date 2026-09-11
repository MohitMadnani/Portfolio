'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED = [
  'How do I contact Mohit?',
  'Tell me about his experience',
  'What has he built?',
  'Is he open to work?',
];

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Mohit's assistant. Ask me about his experience, projects, tech stack, or how to get in touch.",
};

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const next = [...messages, { role: 'user' as const, content: trimmed }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.filter((m) => m !== GREETING),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Something went wrong.');
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/20 transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
            className="fixed bottom-24 right-5 z-[60] flex h-[70vh] max-h-[560px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/25"
            role="dialog"
            aria-label="Portfolio assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Ask about Mohit</p>
                <p className="text-xs text-muted">Usually replies instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-sm bg-primary text-white'
                        : 'rounded-bl-sm bg-background text-foreground'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-background px-3.5 py-2.5 text-sm text-muted">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking…
                  </div>
                </div>
              )}

              {error && (
                <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">{error}</p>
              )}
            </div>

            {/* Suggested questions — always available, not just on first open */}
            <div className="flex flex-wrap gap-2 border-t border-border px-4 pb-1 pt-3">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  disabled={loading}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 p-3 pt-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                maxLength={2000}
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
