"use client";
import { useState } from "react";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Platform belanja online dengan fitur lengkap.",
    image: "/assets/project/ecommerce.png",
    hoverImage: "/assets/project/ecommerce-hover.png",
    link: "https://github.com/username/ecommerce",
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Platform belanja online dengan fitur lengkap.",
    image: "/assets/project/ecommerce2.png",
    hoverImage: "/assets/project/ecommerce2-hover.png",
    link: "https://github.com/username/ecommerce",
  },
  // {
  //   id: 2,
  //   title: "Portfolio Website",
  //   description: "Website portfolio modern dengan animasi keren.",
  //   image: "/assets/project/portfolio.png",
  //   hoverImage: "/assets/project/portfolio-hover.png",
  //   link: "https://github.com/username/portfolio",
  // },
  {
    id: 3,
    title: "Game Top-Up Platform",
    description: "Sistem top-up game dengan Midtrans.",
    image: "/assets/project/topupgame.png",
    hoverImage: "/assets/project/topupgame-hover.png",
    link: "https://github.com/username/topup",
  },
];

export default function Project() {
  return (
    <div className="relative z-20 overflow-hidden">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-[#100948] flex flex-col items-center px-4 py-12">
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

        {/* Kontainer Proyek */}
        <div className="container mx-auto relative z-10 mt-[64px]">
          <h2 className="text-white text-4xl font-bold text-center mb-8">
            My Projects
          </h2>

          {/* Grid Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const [currentImage, setCurrentImage] = useState(project.image);

              return (
                <div
                  key={project.id}
                  className="relative p-6 rounded-lg shadow-lg bg-transparent backdrop border border-white/5 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setCurrentImage(project.hoverImage)}
                  onMouseLeave={() => setCurrentImage(project.image)}
                >
                  {/* Gambar Project */}
                  <Image
                    src={currentImage}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-md transition-all duration-300"
                  />

                  {/* Deskripsi */}
                  <h3 className="text-white text-2xl font-semibold mt-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>

                  {/* Link ke Repo / Demo */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-4 text-[#8F86D9] font-semibold hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
