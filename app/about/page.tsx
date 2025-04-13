"use client";
import FallingText from '../components/FallingText/FallingText';
import Navbar from "../components/Navbar/Navbar";
import Squares from '../components/Squares/Squares';

export default function About() {
  return (
    <div className="relative z-20 overflow-hidden" id="about">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-black flex items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#687090'
          hoverFillColor='#222'
          />
        </div>
        <div className="container mx-auto flex items-center justify-center min-h-screen relative z-10">
          <div className="w-[800px] h-[500px] max-w-[90%] max-h-[90vh] text-white flex flex-col justify-center items-center p-8 text-center overflow-hidden">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <FallingText
              text={`Halo! Saya Ahmad Khotibul Umam, seorang Flutter Frontend Developer yang berpengalaman dalam membangun aplikasi mobile modern dan responsif. Saya menguasai Flutter dan Firebase, memungkinkan saya mengembangkan aplikasi dengan UI yang intuitif dan fitur real-time. Saya selalu siap untuk berkolaborasi dan menciptakan solusi inovatif! 🚀`}
              highlightWords={["Flutter", "Frontend Developer", "Mobile", "Firebase", "UI", "real-time"]}
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
