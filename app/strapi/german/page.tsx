import { getPage } from "@/util/strapi";

export default async function Home() {
  const data = await getPage(2);

  return (
    <main>
      <h1>{data.Title}</h1>
      <div>{data.Content}</div>
    </main>
  );
}
