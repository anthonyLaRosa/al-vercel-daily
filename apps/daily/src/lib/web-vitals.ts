import { onCLS, onINP, onLCP } from "web-vitals";

export function registerWebVitals() {
  onLCP((metric) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log("LCP:", metric.value, "ms", "Target: <2500ms");
    sendToAnalytics(metric);
  });

  onINP((metric) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log("INP:", metric.value, "ms", "Target: <200ms");
    sendToAnalytics(metric);
  });

  onCLS((metric) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log("CLS:", metric.value, "Target: <0.1");
    sendToAnalytics(metric);
  });
}

interface Metric {
  id: string;
  name: string;
  value: number;
  rating: string;
}

function sendToAnalytics(metric: Metric) {
  const { id, name, value, rating } = metric;

  // Send to your analytics endpoint
  fetch("/api/analytics/vitals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      value,
      rating,
      url: window.location.pathname,
      timestamp: Date.now(),
    }),
  }).catch((error) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.error("Failed to send vitals:", error);
  });
}
