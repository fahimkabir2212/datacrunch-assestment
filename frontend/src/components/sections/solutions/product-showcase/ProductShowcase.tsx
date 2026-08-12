import Container from "../../../ui/Container";
import ProductShowcaseSkeleton from "./ProductShowcaseSkeleton";
import SectionError from "../../../feedback/SectionError";
import { useSection } from "../../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../../constants/sections";
import type { ProductShowcaseContent } from "../../../../types/content";

export default function ProductShowcase() {
  const { status, data, error, retry } = useSection<ProductShowcaseContent>(
    SECTION_SLUGS.productShowcase,
  );

  if (status === "loading") return <ProductShowcaseSkeleton />;

  if (status === "error") {
    return <SectionError label="Showcase" error={error} onRetry={retry} />;
  }

  const { logo, heading, description, cta, image } = data;

  return (
    <section id="product-showcase" className="scroll-mt-24 bg-surface-brand">
      <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-between gap-16">
          <img src={logo.src} alt={logo.alt} className="w-48 md:w-56" />

          <div>
            <h3 className="max-w-lg text-3xl font-bold text-ink-inverse md:text-5xl">
              {heading}
            </h3>
            <p className="mt-3 text-sm text-ink-inverse md:text-lg">
              {description}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-inverse px-5 py-2.5 font-bold text-ink-inverse"
            >
              {cta}
            </button>
          </div>
        </div>

        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square w-full rounded-2xl object-cover"
        />
      </Container>
    </section>
  );
}
