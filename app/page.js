import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NewCollections />
      
      {/* Featured Banner */}
      <section className="bg-[#1A4314] text-white py-24 relative overflow-hidden">
        <Image src="/images/bamboo-craft-41.jpg" alt="Kitchen and Dining Background" fill className="object-cover opacity-20 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Elevate Your Dining Experience</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Discover our premium Kitchen & Dining collection. Handwoven bamboo craftsmanship that brings warmth and sustainable elegance to every meal.
          </p>
          <a href="/collection/kitchen-dining" className="inline-block bg-[#D4B872] text-[#1A4314] px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl">
            Shop Kitchen & Dining
          </a>
        </div>
      </section>
    </main>
  );
}
