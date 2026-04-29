import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { ProseItem, ProseList } from "@repo/ui/atoms/typography/prose-list";
import { Pullquote } from "@repo/ui/atoms/typography/pullquote";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { ArticleContent } from "@/services/server-side/get-list-articles";
import { ArticleBody } from "@repo/ui/organisms/article-body";

export function getContentByArticleContent({
  blocks,
}: {
  blocks: ArticleContent;
}) {
  return (
    <ArticleBody.Content>
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "paragraph":
            return (
              <BodyText key={key} size="lg">
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </BodyText>
            );
          case "heading":
            return block.level === 2 ? (
              <Headline key={key} as="h2" size="headline-md">
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </Headline>
            ) : (
              <Headline key={key} as="h3" size="title-lg">
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </Headline>
            );
          case "blockquote":
            return (
              <Pullquote key={key}>
                <ReactMarkdown>{block.text}</ReactMarkdown>
              </Pullquote>
            );
          case "unordered-list":
            return (
              <ProseList key={key}>
                {block.items.map((item, j) => (
                  <ProseItem key={`${key}-${j}`}>
                    <ReactMarkdown>{item}</ReactMarkdown>
                  </ProseItem>
                ))}
              </ProseList>
            );
          case "ordered-list":
            return (
              <ProseList key={key} ordered>
                {block.items.map((item, j) => (
                  <ProseItem key={`${key}-${j}`}>
                    <ReactMarkdown>{item}</ReactMarkdown>
                  </ProseItem>
                ))}
              </ProseList>
            );
          case "image":
            return (
              block.src && (
                <figure key={key} className="my-6">
                  <div className="relative aspect-video overflow-hidden rounded-organic">
                    <Image
                      fill
                      src={block.src}
                      alt={block.alt}
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, 896px"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-2 text-center font-body text-on-surface-variant text-xs">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              )
            );
          default:
            return null;
        }
      })}
    </ArticleBody.Content>
  );
}
