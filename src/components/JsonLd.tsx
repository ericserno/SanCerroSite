type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

/** Invisible JSON-LD for search engines and AI answer retrieval. */
export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
