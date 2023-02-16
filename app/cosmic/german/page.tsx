import { getPage } from "@/util/cosmic";

export default async function Home() {
  const data = await getPage("terms-conditions", "de-DE");

  return (
    <main>
      <h1>{data.objects[0].title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.objects[0].content }} />
    </main>
  );
}
