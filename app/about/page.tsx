"use client";
import FallingText from '../components/FallingText/FallingText';
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

export default function About() {
  return (
    <div className="relative z-20 overflow-hidden" id="about">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-[#100948] flex items-center justify-center px-4">
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
        <div className="container mx-auto flex items-center justify-center min-h-screen">
          <div className="w-[800px] h-[500px] max-w-[90%] max-h-[90vh] text-white flex flex-col justify-center items-center p-8 text-center overflow-hidden">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <FallingText
              text={`Halo! Saya seorang Backend Developer yang memiliki passion dalam membangun sistem yang efisien, scalable, dan aman. Dengan pengalaman dalam mengembangkan aplikasi menggunakan Laravel, Node.js, dan berbagai teknologi backend lainnya, saya berfokus pada pembuatan API yang optimal, pengelolaan database yang terstruktur, serta integrasi layanan pihak ketiga seperti pembayaran dan autentikasi. Jika Anda mencari seseorang yang dapat membangun dan mengoptimalkan sistem backend, mari kita berdiskusi lebih lanjut! 🚀`}
              highlightWords={["Backend", "Developer", "Laravel", "Node.js", "API", "database", "keamanan"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.25rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
