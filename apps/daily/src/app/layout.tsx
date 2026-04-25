import type { Metadata } from "next";

import "./globals.css";
import { FooterNext } from "@/components/footer/footer-next";
import { HeaderNext } from "@/components/header.next";
import Providers from "@/hooks/TanstackQuery";
import { getConfiguration } from "@/services/server-side/get-configuration";

export async function generateMetadata(): Promise<Metadata> {
  const configuration = await getConfiguration();

  return {
    title: {
      default: configuration.data?.seo.defaultTitle || "The Archivist",
      template: configuration.data?.seo.titleTemplate || "%s | The Archivist",
    },
    description:
      configuration.data?.seo.defaultDescription || "The Archivist daily news",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <div className="mx-auto w-full xl:max-w-[1440px]">
            <HeaderNext />
            <main className="flex flex-col gap-12 px-4 md:px-8 pt-6 pb-12">
              {children}
            </main>
            <FooterNext />
          </div>
        </body>
      </Providers>
    </html>
  );
}
