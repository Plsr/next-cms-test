import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href="strapi/german">
        <h2>Deutscher text</h2>
      </Link>
      <Link href="strapi/english">
        <h2>English text</h2>
      </Link>
    </main>
  );
}
