"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useTransitionStore } from "../stores/transition-store";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const router = useRouter();
  const navigate = useTransitionStore((s) => s.navigate);

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate?.(() => router.push(href));
      }}
      prefetch={false}
    >
      {children}
    </Link>
  );
}

export { TransitionLink };
