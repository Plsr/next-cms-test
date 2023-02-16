import { getPage } from "@/util/sanity";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const page = await getPage("b8a236cb-c9df-424c-912d-284355cfa187");

  return (
    <main>
      <h1>{page.title}</h1>
      <PortableText value={page.content} />
    </main>
  );
}
