import AutoHideHero from "@/components/AutoHideHero";
// import Newsletter from "@/components/Newsletter";
import Footnote from "@/components/Footnote";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <AutoHideHero />
      {/* <Newsletter /> */}
      <Footnote />
    </main>
  );
}
