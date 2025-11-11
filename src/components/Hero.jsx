import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center py-28 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15)_0%,_transparent_70%)] blur-3xl"></div>

      {/* Avatar / Profile Image */}
      <Image
        src="/avatar.jpeg" // Pastikan file ini ada di folder /public
        alt="Muhammad Zaidan"
        width={128}
        height={128}
        priority
        className="relative z-10 rounded-full mx-auto mb-6 border-2 border-sky-500 shadow-[0_0_20px_#38bdf8]"
      />

      {/* Name and Tagline */}
      <h1 className="relative z-10 text-5xl font-bold text-sky-400 mb-3 tracking-tight">
        Muhammad Zaidan
      </h1>
      <p className="relative z-10 text-gray-400 mb-8 text-lg max-w-xl mx-auto">
        <span className="text-sky-300">Tech Student</span> • AI & Cybersecurity
        Enthusiast <br />
        Building intelligent systems that <span className="text-sky-400">adapt, learn,</span> and{" "}
        <span className="text-sky-400">evolve.</span>
      </p>

      {/* Action Button */}
      <a
        href="#projects"
        className="relative z-10 inline-block bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-[0_0_20px_#38bdf8aa]"
      >
        🚀 View Projects
      </a>

      {/* Floating decorative lights */}
      <div className="absolute top-20 left-[10%] w-3 h-3 bg-sky-400 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-24 right-[15%] w-4 h-4 bg-cyan-400 rounded-full blur-md animate-ping"></div>
      <div className="absolute top-1/2 left-[80%] w-2 h-2 bg-blue-500 rounded-full blur-sm animate-bounce"></div>
    </section>
  );
}
