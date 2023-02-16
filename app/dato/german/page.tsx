import { getPage } from "@/util/dato";

export default async function Home() {
  const page = await getPage("122969602", "de");

  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}
