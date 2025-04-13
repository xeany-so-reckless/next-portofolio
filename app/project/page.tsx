"use client";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Squares from "../components/Squares/Squares";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  link: string;
}
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Platform belanja online dengan fitur lengkap menggunakan PHP Native (2022)",
    image: "/assets/project/ecommerce.png",
    hoverImage: "/assets/project/ecommerce-hover.png",
    link: "/notfound",
  },
  {
    id: 2,
    title: " Sistem Presensi Karyawan",
    description: "Aplikasi presensi karyawan lengkap menggunakan Flutter & Laravel (2024)",
    image: "/assets/project/presensi.png",
    hoverImage: "/assets/project/presensi-hover.png",
    link: "/notfound",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Aplikasi media sosial sederhana menggunakan Flutter & Firebase (2025)",
    image: "/assets/project/sosmed.png",
    hoverImage: "/assets/project/sosmed-hover.png",
    link: "/notfound",
  },
];

export default function ProjectPage() {
  return (
    <div className="relative z-20 overflow-hidden">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-black flex flex-col items-center px-4 py-12">
        <div className="absolute inset-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#687090'
          hoverFillColor='#222'
          />
        </div>
        <div className="container mx-auto relative z-10 mt-[64px]">
          <h2 className="text-white text-4xl font-bold text-center mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState<string>(project.image);

  return (
    <div
      className="relative p-6 rounded-lg shadow-lg bg-black/5 backdrop-blur-sm border border-black/10 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setCurrentImage(project.hoverImage)}
      onMouseLeave={() => setCurrentImage(project.image)}
    >
      <Image
        src={currentImage}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-md transition-all duration-300"
      />
      <h3 className="text-white text-2xl font-semibold mt-4">
        {project.title}
      </h3>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <Link
        href={project.link}
        target={project.link.startsWith("http") ? "_blank" : "_self"}
        className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
      >
        View Project →
      </Link>
    </div>
  );
}
