import AutoHideHero from "@/components/AutoHideHero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoHideHero />
      <Newsletter />
    </main>
  );
}
