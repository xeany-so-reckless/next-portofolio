"use client";

import FuzzyText from "./components/FuzzyText/FuzzyText";
import Particles from "./components/Particles/Particles";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#100948] text-white px-4 text-center w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Particles
          particleColors={["#8F86D9", "#ffffff"]}
          particleCount={2000}
          particleSpread={8}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
        >
          404 - Page Not Found
        </FuzzyText>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Oops! Halaman yang kamu cari tidak ditemukan.
        </p>
        <Link href="/" passHref>
          <button className="mt-6 px-6 py-3 bg-[#8F86D9] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#7a72c0] transition-all duration-300">
            Kembali ke Home
          </button>
        </Link>
      </div>
    </div>
  );
}
