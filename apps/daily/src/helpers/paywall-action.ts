"use server";

import { cookies } from "next/headers";

export const setPaywall = async () => {
  const cookieStore = await cookies();
  cookieStore.set("paid", "full", {
    maxAge: 60 * 5, // 5 minutes
    httpOnly: true,
    secure: true,
  });
};
