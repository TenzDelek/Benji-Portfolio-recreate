import { AnalyzingImage } from "@/components/analyse";

export default function Home() {
  return (
    <div className=" space-y-4 mx-auto text-sm max-w-145.5 h-screen px-4 pt-20 pb-10">
      <div>
        <article>
          <header className="flex flex-col pb-2 gap-1">
            <h1 className="text-[#111] font-medium">Benji Taylor</h1>
            <time className="text-[rgba(0,0,0,.4)] font-[460]">Updated Mar 25, 2026</time>
          </header>
        </article>
        <div className="flex flex-col space-y-4 pt-4 font-[460] tracking-[-0.00563rem]">
          <p>I was born in London, UK, and now live in Los Angeles, CA.</p>
          <p>I founded Los Feliz Engineering, a consumer software company named after the
            first neighbourhood I moved to in the U.S. We created Honk, a real-time messaging app,
            and Family, a self-custody crypto wallet. In September 2023, LFE was acquired by Aave Labs,
            where I served as CPO until October 2025.
          </p>
          <p>I currently work at SpaceX/xAI, where I lead design for X. Previously, I was Head of Design at Base, a division of Coinbase.</p>
          <p>I’m also a co-founder at Dip, which creates and publishes tools for achieving interface excellence, such as cmdk and Agentation.</p>
          <p>I consider myself a designer at heart and enjoy building highly polished products.</p>
          <p>You can find me on X, Instagram, or reach me via email.</p>
        </div>
      </div>
      <AnalyzingImage />
    </div>
  );
}
