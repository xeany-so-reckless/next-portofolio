import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer motion

const quotes: string[] = [
  "The best way to predict the future is to create it. – Peter Drucker",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Don’t watch the clock, do what it does. Keep going. – Sam Levenson",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "Your limitation—it's only your imagination.",
];

export default function QuoteWidget() {
  const [quote, setQuote] = useState<string>(quotes[0]); // Set default quote
  const [key, setKey] = useState<number>(0); // Tambahkan key untuk memicu animasi

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
      setKey((prevKey) => prevKey + 1); // Perbarui key agar animasi dipicu ulang
    }, 8000); // Ganti quote setiap 8 detik

    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, []);

  return (
    <div className="fixed bottom-4 left-4 text-gray-300 px-4 py-2 shadow-md text-sm max-w-xs rounded-md">
      <motion.p
        key={key} // Ubah key agar Framer Motion mengenali perubahan
        initial={{ opacity: 0, y: 10 }} // Animasi masuk
        animate={{ opacity: 1, y: 0 }} // Animasi saat aktif
        exit={{ opacity: 0, y: -10 }} // Animasi keluar
        transition={{ duration: 0.5, ease: "easeInOut" }} // Transisi halus
        className="text-center italic"
      >
        "{quote}"
      </motion.p>
    </div>
  );
}
