"use client";
import Lanyard from "../components/Lanyard/Lanyard";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

export default function Skill() {
  return (
    <div className="relative z-20 overflow-hidden" id="about">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-[#100948] flex items-center justify-center px-4">
        {/* Partikel Latar Belakang */}
        <div className="absolute inset-0 w-full h-full">
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

        {/* Kontainer */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 h-screen items-center">
            {/* Bagian Kiri - Teks / Deskripsi */}
            <div className="md:col-span-6 flex flex-col justify-center items-center md:items-start h-full p-4 md:pl-8">
              <h2 className="text-white text-4xl font-bold">About My Skill</h2>
              <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.
              </p>
            </div>

            {/* Bagian Kanan - Lanyard */}
            {/* <div className="md:col-span-6 flex justify-center items-center">
              <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
