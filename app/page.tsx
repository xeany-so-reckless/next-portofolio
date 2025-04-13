"use client";
import Link from "next/link";
import GradientText from "./components/GradientText/GradientText";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import Squares from "./components/Squares/Squares";
import Navbar from "./components/Navbar/Navbar";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import dynamic from 'next/dynamic';

const TextPressure = dynamic(() => import("./components/TextPressure/TextPressure"), {
  ssr: false,
  loading: () => (
    <div style={{position: 'relative', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{color: '#1976D2', fontSize: '24px'}}>Mobile Developer</h1>
    </div>
  )
});




export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  
  return (
    
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-black flex items-center justify-center px-4 relative pt-16 lg:pt-0">
        <div className="absolute inset-0 w-full h-full z-0">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' 
          borderColor='#687090'
          hoverFillColor='#687090'
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 h-screen items-center">
            <div className="md:col-span-6 flex flex-col justify-center items-center md:items-start h-full p-4 md:pl-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <BlurText
                  text="I'm Ahmad Khotibul Umam"
                  delay={400}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-white truncate max-w-full whitespace-nowrap overflow-hidden"
                />
                <div style={{position: 'relative', height: '150px'}}>
                  <TextPressure
                    text="Mobile Developer"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#E6E6FA"
                    strokeColor="#F8F8FF"
                    minFontSize={10}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 z-50">
                <h1 className="text-lg md:text-xl text-white font-bold text-center md:text-left">
                  I'm Ready For Job
                </h1>
                <RotatingText
                  texts={[
                    "Mobile Development",
                    "Web Development",
                    "Flutter",
                    "Tailwind CSS",
                    "Firebase",
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-700 text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              <div className="mt-6 z-50">
              <a
                href="mailto:ahmadkhotibul321@gmail.com" // Ganti dengan emailmu
                className="inline-block"
              >
                <GradientText
                  colors={["#4079ff", "#ffff", "#4079ff", "#ffff", "#4079ff"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="custom-class text-2xl font-bold px-4 py-2 transition-all"
                >
                  Contact Me
                </GradientText>
              </a>
              </div>
            </div>
            <div className="md:col-span-6 flex justify-center items-center mt-[-120px]">
              <Lanyard position={[0, 0, 13]} gravity={[0, -30, 0]} />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex gap-4 z-50">
        <a
        href="https://www.linkedin.com/in/ahmad-khotibul-umam23" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white shadow-lg transition-all hover:text-blue-700">
          <BiLogoLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/a.khotibulumam?igsh=MXd4am05NjJldmtyaQ==" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white shadow-lg transition-all hover:text-pink-700">
          <BiLogoInstagram size={24} />
        </a>
        <a
          href="https://github.com/xeany-so-reckless" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white shadow-lg transition-all hover:text-gray-400">
          <BiLogoGithub size={24} />
        </a>
      </div>
    </div>
  );
}
