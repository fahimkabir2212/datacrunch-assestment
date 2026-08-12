import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import FooterLinks from "./FooterLinks";
import FooterWordmark from "./FooterWordmark";
import FooterSkeleton from "./FooterSkeleton";
import SectionError from "../../feedback/SectionError";
import { useSiteSection } from "../../../hooks/useSection";
import { SITE_SLUGS } from "../../../constants/sections";
import type { FooterContent } from "../../../types/content";

export default function Footer() {
  const { status, data, error, retry } = useSiteSection<FooterContent>(
    SITE_SLUGS.footer,
  );

  if (status === "loading") return <FooterSkeleton />;

  if (status === "error") {
    return (
      <footer className="bg-surface-emphasis">
        <SectionError label="Footer" error={error} onRetry={retry} />
      </footer>
    );
  }

  // console.log("Footer data:", data);

  const { copyright, legalLinks, socialLinks, wordmark } = data;

  return (
    <footer className="bg-surface-emphasis pt-10">
      <Container>
        <div className="flex min-h-30 flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-ink-inverse">
            <HighlightedText segments={copyright} />
          </p>

          <FooterLinks label="Legal" links={legalLinks} />
          <FooterLinks label="Social media" links={socialLinks} />
        </div>

        <FooterWordmark src={wordmark.src} alt={wordmark.alt} />
      </Container>
    </footer>
  );
}
