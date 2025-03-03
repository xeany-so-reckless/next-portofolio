"use client";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";
import { FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiPostman, SiLivewire, SiFilament } from "react-icons/si";

const techStacks = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" size={50} /> },
  { name: "React", icon: <FaReact className="text-blue-400" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" size={50} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" size={50} /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" size={50} /> },
  { name: "Livewire", icon: <SiLivewire className="text-red-400" size={50} /> },
  { name: "Filament", icon: <SiFilament className="text-pink-500" size={50} /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={50} /> },
];

export default function TechStack() {
  return (
    <div className="relative z-20 overflow-hidden" id="techstack">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-[#100948] flex flex-col items-center justify-center px-4 text-white text-center">
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
        <div className="relative z-10 max-w-4xl mx-auto py-10">
          <p className="text-gray-300 mb-6">
            Berikut adalah teknologi yang saya gunakan dalam pengembangan web.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techStacks.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-[#1a103d] rounded-lg shadow-lg hover:scale-105 transition-all">
                {tech.icon}
                <span className="text-lg font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
