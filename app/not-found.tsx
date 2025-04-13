"use client";
import Squares from "./components/Squares/Squares";
import FuzzyText from "./components/FuzzyText/FuzzyText";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#100948] text-white px-4 text-center w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#687090"
          hoverFillColor="#222"
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
          Oops! Halaman tidak ditemukan.
        </p>
        <Link href="/" passHref>
          <button className="mt-6 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-400 transition-all duration-300">
            Kembali ke Home
          </button>
        </Link>
      </div>
    </div>
  );
}
