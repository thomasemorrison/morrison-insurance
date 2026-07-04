import { useEffect } from "react";

// ============================================================
// SchemaMarkup — injects JSON-LD structured data into <head>
// Supports: Article, BreadcrumbList, LocalBusiness
// ============================================================

interface ArticleSchemaProps {
  type: "article";
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherUrl: string;
  imageUrl: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}

type SchemaProps = ArticleSchemaProps;

export function SchemaMarkup(props: SchemaProps) {
  useEffect(() => {
    const id = `schema-${props.url.replace(/[^a-z0-9]/gi, "-")}`;
    // Remove any existing schema for this page
    document.getElementById(id)?.remove();

    if (props.type === "article") {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.headline,
        description: props.description,
        url: props.url,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        author: {
          "@type": "Organization",
          name: props.authorName,
          url: props.publisherUrl,
        },
        publisher: {
          "@type": "LocalBusiness",
          name: props.publisherName,
          url: props.publisherUrl,
          logo: {
            "@type": "ImageObject",
            url: `${props.publisherUrl}/favicon.ico`,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Center",
            addressRegion: "TX",
            postalCode: "75935",
            addressCountry: "US",
          },
          telephone: "+19365982791",
        },
        image: {
          "@type": "ImageObject",
          url: props.imageUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": props.url,
        },
      };

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };

      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify([articleSchema, breadcrumbSchema]);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [props.url]);

  return null;
}
