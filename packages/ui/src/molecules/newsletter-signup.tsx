"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface NewsletterSignupProps {
  onSubmit?: (email: string) => void | Promise<void>;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

function NewsletterSignup({
  onSubmit,
  title,
  description,
  buttonText = "Subscribe",
  placeholder = "Your email address",
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    setLoading(true);
    try {
      await onSubmit?.(email);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {title && <div>{title}</div>}
      {description && <div>{description}</div>}
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded-soft bg-surface-container-highest px-4 py-3 font-body text-on-surface text-sm transition-all placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          type="email"
          value={email}
        />
        <button
          className="flex-shrink-0 rounded-soft bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:bg-primary-container disabled:opacity-60"
          disabled={loading}
          type="submit"
        >
          {loading ? "..." : buttonText}
        </button>
      </form>
    </div>
  );
}

export { NewsletterSignup };
