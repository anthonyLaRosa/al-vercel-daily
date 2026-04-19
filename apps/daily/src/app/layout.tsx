import type { Metadata } from "next";

import "./globals.css";
import { FooterNext } from "@/components/footer-next";
import { HeaderNext } from "@/components/header.next";
import Providers from "@/hooks/TanstackQuery";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Vercel Academy Foundation - Web",
  description: "VAF Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
        <div className="container mx-auto px-4">
          <HeaderNext />
          <main className="flex flex-col gap-12 px-8 pt-6 pb-12">
            {children}
          </main>
          <FooterNext />
        </div>
        </body>
      </Providers>
    </html>
  );
}
