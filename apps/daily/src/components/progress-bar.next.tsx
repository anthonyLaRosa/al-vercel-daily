"use client";

import { useTransitionStore } from "@repo/ui/stores/transition-store";
import { useEffect, useRef, useState, useTransition } from "react";

export function ProgressBar() {
  const [isPending, startTransition] = useTransition();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [fading, setFading] = useState(false);
  const [transitionStyle, setTransitionStyle] = useState("none");
  const wasLoadingRef = useRef(false);
  const t1 = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const t2 = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    useTransitionStore.setState({
      startAppTransition: (fn) => startTransition(fn),
      navigate: (fn) => startTransition(fn),
    });
  }, []);

  useEffect(() => {
    useTransitionStore.setState({ isPending });
  }, [isPending]);

  useEffect(() => {
    clearTimeout(t1.current);
    clearTimeout(t2.current);

    if (isPending) {
      wasLoadingRef.current = true;
      setFading(false);
      setVisible(true);
      setTransitionStyle("none");
      setWidth(0);
      t1.current = setTimeout(() => {
        setTransitionStyle("width 12s cubic-bezier(0.12, 0.5, 0.05, 1)");
        setWidth(85);
      }, 50);
    } else if (wasLoadingRef.current) {
      wasLoadingRef.current = false;
      setTransitionStyle("width 0.2s ease-out");
      setWidth(100);
      t1.current = setTimeout(() => {
        setFading(true);
        t2.current = setTimeout(() => {
          setVisible(false);
          setWidth(0);
          setFading(false);
        }, 350);
      }, 200);
    }

    return () => {
      clearTimeout(t1.current);
      clearTimeout(t2.current);
    };
  }, [isPending]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[9999] h-[3px]"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.35s ease" : undefined,
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${width}%`,
          background: "var(--color-primary, #a20513)",
          transition: transitionStyle,
        }}
      />
    </div>
  );
}
