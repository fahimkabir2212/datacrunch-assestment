import Container from "../../../ui/Container";
import Button from "../../../ui/buttons/Button";
import ArrowRightIcon from "../../../ui/icons/ArrowRightIcon";
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
    <section
      id="product-showcase"
      className="grain scroll-mt-24 bg-surface-brand"
    >
      <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-between gap-16">
          <img
            src={logo.src}
            alt={logo.alt}
            width={697}
            height={100}
            loading="lazy"
            decoding="async"
            className="w-48 md:w-56"
          />

          <div>
            <h3 className="max-w-lg text-3xl font-bold text-ink-inverse md:text-3xl lg:text-5xl">
              {heading}
            </h3>
            <p className="mt-3 text-sm text-ink-inverse lg:text-lg">
              {description}
            </p>
            <Button
              variant="outline"
              icon={<ArrowRightIcon />}
              className="mt-6"
            >
              {cta}
            </Button>
          </div>
        </div>

        <img
          src={image.src}
          alt={image.alt}
          width={4000}
          height={2700}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-2xl object-cover"
        />
      </Container>
    </section>
  );
}
