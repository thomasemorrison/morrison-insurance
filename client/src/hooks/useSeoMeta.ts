import { useEffect } from "react";

/**
 * Dynamically sets the document title and meta description for each page.
 * Used on all service pages, About, Contact, Resources, etc.
 */
export function useSeoMeta(title: string, description: string) {
  useEffect(() => {
    // Set title
    const prevTitle = document.title;
    document.title = title;

    // Set meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = metaDesc?.content ?? "";
    if (metaDesc) {
      metaDesc.content = description;
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // Restore on unmount (back to homepage defaults)
    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.content = prevDesc;
    };
  }, [title, description]);
}
