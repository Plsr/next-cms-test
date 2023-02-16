import { getPage } from "@/util/sanity";
import Link from "next/link";

export default async function Home() {
  const data = await getPage("asd");
  return (
    <main>
      <Link href="sanity/german">
        <h2>Deutscher text</h2>
      </Link>
      <Link href="sanity/english">
        <h2>English text</h2>
      </Link>
    </main>
  );
}
