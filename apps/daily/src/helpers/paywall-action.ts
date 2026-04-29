"use server";

import { cookies } from "next/headers";
import type { Paywall } from "@/interfaces/Paywall.interface";

export const setPaywall = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("paid") || "preview";
  const newValue = cookie === "preview" ? "full" : "preview";
  cookieStore.set("paid", newValue, {
    maxAge: 60 * 60 * 24, // 1 days
    httpOnly: true,
    secure: true,
  });
};

export const getPaywall = async (): Promise<Paywall> => {
  const cookieStore = await cookies();
  const paid = cookieStore.get("paid")?.value || "preview";
  return paid as Paywall;
};
