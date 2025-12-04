"use client";

import { motion } from "framer-motion";
import { FloatingUI } from "@/components/landing/floating-ui";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "../logo";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Logo />
          <span>KlaroGov</span>
        </Link>
        <Button
          asChild
          variant="secondary"
          className="bg-white/10 hover:bg-white/20 text-white"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative bg-dark-slate text-white overflow-hidden">
      <Header />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.2), rgba(255, 237, 213, 0.1))",
            filter: "blur(128px)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-32 sm:py-48 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              Re-imagining Public Service
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              KlaroGov is a unified platform for modern, transparent, and
              accessible government services.
            </p>
            <Button
              size="lg"
              className="bg-white text-dark-slate hover:bg-slate-200"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center h-[350px] sm:h-[450px]">
          <FloatingUI />
        </div>
      </div>
    </section>
  );
}
