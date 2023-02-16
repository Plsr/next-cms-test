import { getPage } from "@/util/prepr";

export default async function Home() {
  const page = await getPage("7f318e8a-d177-408c-b175-1b5185357115");
  const data = page["en-US"];

  return (
    <main>
      <h1>{data.title.body}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.body }} />
    </main>
  );
}
