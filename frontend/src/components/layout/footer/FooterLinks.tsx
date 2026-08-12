import type { FooterLink } from "../../../types/content";

interface FooterLinksProps {
  label: string;
  links: FooterLink[];
  className?: string;
}

export default function FooterLinks({
  label,
  links,
  className = "",
}: FooterLinksProps) {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap font-semibold items-center gap-x-8 gap-y-2">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              {...(isExternal(link.href)
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="text-ink-inverse underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
