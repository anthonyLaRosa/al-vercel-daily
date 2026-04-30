import { ImageResponse } from "next/og";
import { getArticleDetails } from "@/services/server-side/get-article-details";

export const alt = "Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchGoogleFont(
  family: string,
  italic: boolean,
  weight: number,
): Promise<ArrayBuffer> {
  const axis = italic
    ? `${family}:ital,wght@1,${weight}`
    : `${family}:wght@${weight}`;
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${axis}`,
    // Old UA causes Google to return TTF instead of WOFF2 (Satori only supports TTF/OTF)
    { headers: { "User-Agent": "Mozilla/4.0 (compatible; MSIE 6)" } },
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) {
    throw new Error(`Could not extract font URL for ${family}`);
  }
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: article } = await getArticleDetails(slug);

  const [newsreader, manrope] = await Promise.all([
    fetchGoogleFont("Newsreader", true, 700),
    fetchGoogleFont("Manrope", false, 600),
  ]);

  const title = article?.title ?? "Article";
  const category = article?.category ?? "";
  const authorName = article?.author?.name ?? "";
  const image = article?.image ?? "";

  const fontSize = title.length > 70 ? 52 : 64;
  const displayTitle = title.length > 100 ? `${title.slice(0, 97)}…` : title;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#0a0a0a",
      }}
    >
      {image && (
        // biome-ignore lint/a11y/useAltText: decorative OG background
        <img
          src={image}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.93) 100%)",
          display: "flex",
        }}
      />

      {/* Content layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 56px",
        }}
      >
        {/* Top bar: brand + category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "Newsreader",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: 30,
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            The Archivist
          </span>

          {category && (
            <span
              style={{
                backgroundColor: "#a20513",
                color: "white",
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: 15,
                padding: "7px 18px",
                borderRadius: 12,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {category}
            </span>
          )}
        </div>

        {/* Bottom: title + author */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <h1
            style={{
              fontFamily: "Newsreader",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {displayTitle}
          </h1>

          {authorName && (
            <span
              style={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: 20,
                color: "rgba(255,255,255,0.70)",
                letterSpacing: "0.01em",
              }}
            >
              {authorName}
            </span>
          )}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreader, style: "italic", weight: 700 },
        { name: "Manrope", data: manrope, style: "normal", weight: 600 },
      ],
    },
  );
}
