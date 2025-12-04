"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QrCodePattern = () => {
  const [pattern, setPattern] = useState<boolean[]>([]);

  useEffect(() => {
    const size = 10;
    const newPattern = Array.from({ length: size * size }).map(
      () => Math.random() > 0.6
    );
    setPattern(newPattern);
  }, []);

  if (pattern.length === 0) {
    return <div className="w-20 h-20 bg-slate-200 rounded-md animate-pulse"></div>;
  }

  return (
    <div className="grid grid-cols-10 gap-px w-20 h-20">
      {pattern.map((p, i) => (
        <div
          key={i}
          className={`w-full h-full ${p ? "bg-accent-slate" : "bg-slate-300"}`}
        ></div>
      ))}
    </div>
  );
};

export function FloatingUI() {
  return (
    <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]">
      <motion.div
        className="absolute w-80 h-48 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"
        style={{ top: "35%", left: "10%" }}
        animate={{ y: [-10, 10], x: [-5, 5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-72 p-4 bg-white rounded-xl shadow-2xl flex items-center justify-between"
        style={{ top: "25%", left: "20%" }}
        animate={{ y: [15, -15] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="text-left">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          <div className="mt-4 h-3 w-24 bg-slate-200 rounded"></div>
          <div className="mt-2 h-3 w-16 bg-slate-200 rounded"></div>
        </div>
        <QrCodePattern />
      </motion.div>

      <motion.div
        className="absolute w-40 p-3 bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center gap-2"
        style={{ top: "15%", right: "15%" }}
        animate={{ y: [-15, 15], x: [5, -5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="relative flex items-center justify-center w-10 h-10">
          <div className="absolute w-full h-full rounded-full bg-accent-rose animate-ping opacity-75"></div>
          <div className="w-6 h-6 rounded-full bg-accent-rose"></div>
        </div>
        <div className="h-2 w-16 bg-rose-100 rounded-full"></div>
      </motion.div>
    </div>
  );
}
