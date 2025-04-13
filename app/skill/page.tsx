"use client";
import Squares from "../components/Squares/Squares";
import Navbar from "../components/Navbar/Navbar";
import { FaLaravel, FaHtml5, FaCss3Alt, } from "react-icons/fa";
import { SiMysql, SiFilament, SiTailwindcss, SiPhp } from "react-icons/si";
import { FaAndroid, FaBootstrap, FaDartLang, FaFlutter } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";

const techStacks = [
  { name: "Flutter", icon: <FaFlutter className="text-blue-400" size={50} /> },
  { name: "Dart", icon: <FaDartLang className="text-blue-400" size={50} /> },
  { name: "Android", icon: <FaAndroid className="text-green-500" size={50} /> },
  { name: "Firebase", icon: <BiLogoFirebase className="text-[#FFA000]" size={50} /> },
  { name: "PHP", icon: <SiPhp className="text-[#777BB3]" size={50} /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" size={50} /> },
  { name: "Filament", icon: <SiFilament className="text-pink-500" size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" size={50} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" size={50} /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" size={50} /> },
];

export default function TechStack() {
  return (
    <div className="relative z-20 overflow-hidden" id="techstack">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-black flex flex-col items-center justify-center px-4 text-white text-center">
        <div className="absolute inset-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#687090'
          hoverFillColor='#222'
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto py-10 mt-20">
          <p className="text-gray-300 mb-6">
            Berikut adalah teknologi yang saya kuasai dalam pengembangan software.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techStacks.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-black rounded-lg shadow-lg hover:scale-105 transition-all">
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
