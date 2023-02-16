import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href="dato/german">
        <h2>Deutscher text</h2>
      </Link>
      <Link href="dato/english">
        <h2>English text</h2>
      </Link>
    </main>
  );
}
