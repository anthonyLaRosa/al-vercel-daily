import { Button, type IconList } from "@repo/ui/atoms/button";
import { getConfiguration } from "@/services/server-side/get-configuration";

interface SocialLinks {
  icon: IconList;
  url: string;
}

export async function FooterSocialNext() {
  const configuration = await getConfiguration();

  const socialLinks: (SocialLinks | null)[] = configuration?.data?.socialLinks
    ? Object.entries(configuration?.data?.socialLinks).map(([key, value]) => {
        switch (key) {
          case "twitter":
            return {
              icon: "Twitter",
              url: value,
            };
          case "linkedin":
            return {
              icon: "Linkedin",
              url: value,
            };
          case "github":
            return {
              icon: "Github",
              url: value,
            };
          case "discord":
            return {
              icon: "MessageSquare",
              url: value,
            };
          default:
            return null;
        }
      })
    : [];

  return socialLinks.map(
    (link) =>
      link && (
        <Button
          href={link.url}
          icon={link.icon}
          variant={"ghost"}
          key={link.url}
          size={"icon"}
          aria-label={`${link.icon} link`}
        />
      ),
  );
}
