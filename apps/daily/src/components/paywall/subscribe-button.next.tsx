"use server";

import { getPaywall } from "@/helpers/paywall-action";
import { SubscribeButtonClient } from "./subscribe-button-client.next";

export async function SubscribeButton() {
  const paid = await getPaywall();
  const label = paid === "full" ? "Unsubscribe" : "Subscribe";
  return <SubscribeButtonClient label={label} />;
}
