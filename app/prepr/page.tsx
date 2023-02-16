import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href="prepr/german">
        <h2>Deutscher text</h2>
      </Link>
      <Link href="prepr/english">
        <h2>English text</h2>
      </Link>
    </main>
  );
}
