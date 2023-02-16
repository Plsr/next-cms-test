import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href="/cosmic">
        <h2>Cosmic CMS</h2>
      </Link>
      <Link href="/prepr">
        <h2>Prepr.io</h2>
      </Link>
    </main>
  );
}
