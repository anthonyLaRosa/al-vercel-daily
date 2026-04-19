import { Button } from "@repo/ui/atoms/button";
import { GlassPanel } from "@repo/ui/atoms/glass-panel";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { PaywallSection } from "@repo/ui/organisms/paywall-section";
import { getContentByArticleContent } from "@/helpers/getContentByArticleContent";
import type { ArticleContent } from "@/services/server-side/get-list-articles";

export interface ArticleBodyNextProps {
  content: ArticleContent;
  paywall?: boolean;
}

export const ArticleBodyNext = ({
  content,
  paywall = false,
}: ArticleBodyNextProps) => {
  if (!content) {
    return null;
  }

  if (paywall) {
    return getContentByArticleContent({ blocks: content });
  }
  const previewContent = content.slice(0, Math.ceil(content.length / 2));

  return (
    <PaywallSection>
      <PaywallSection.Preview>
        {getContentByArticleContent({ blocks: previewContent })}
      </PaywallSection.Preview>
      <PaywallSection.Gate>
        <GlassPanel
          variant="paywall"
          className="w-full max-w-md p-8 text-center space-y-4"
        >
          <Headline size="title-lg">Subscribe to read more</Headline>
          <Button>Get full access</Button>
        </GlassPanel>
      </PaywallSection.Gate>
    </PaywallSection>
  );
};
