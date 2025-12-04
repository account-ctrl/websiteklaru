"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AdminView = () => (
  <div className="w-full h-96 bg-slate-50 rounded-2xl p-4 flex gap-4 border border-slate-200 shadow-soft">
    <div className="w-1/4 bg-white rounded-lg p-2 space-y-2 border border-slate-100">
      <div className="h-8 bg-slate-100 rounded-md"></div>
      <div className="h-4 bg-slate-100 rounded-md w-3/4"></div>
       {[...Array(8)].map((_, i) => (
          <div key={i} className="h-6 bg-slate-100 rounded" style={{ width: `${100 - i*5}%` }}></div>
        ))}
    </div>
    <div className="w-3/4 flex flex-col gap-3">
      <div className="h-12 bg-white rounded-md flex items-center px-4 border border-slate-100">
        <div className="h-5 w-48 bg-slate-200 rounded-md"></div>
      </div>
      <div className="flex-1 bg-white rounded-md p-3 space-y-3 border border-slate-100">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 bg-slate-100 rounded-md" style={{ width: `${100 - i*10}%` }}></div>
        ))}
      </div>
       <div className="flex justify-end">
          <div className="h-10 w-32 bg-primary rounded-md"></div>
        </div>
    </div>
  </div>
);

const ResidentView = () => (
  <div className="w-full h-96 bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-soft">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <div className="bg-white border border-slate-100 rounded-lg p-4 flex flex-col justify-end">
        <div className="h-6 w-3/4 bg-slate-200 rounded-md"></div>
        <div className="h-4 w-1/2 bg-slate-100 rounded-md mt-2"></div>
      </div>
      <div className="bg-white border border-slate-100 rounded-lg p-4 flex flex-col justify-end">
        <div className="h-6 w-3/4 bg-slate-200 rounded-md"></div>
        <div className="h-4 w-1/2 bg-slate-100 rounded-md mt-2"></div>
      </div>
      <div className="bg-white border border-slate-100 rounded-lg p-4 flex flex-col justify-end">
        <div className="h-6 w-3/4 bg-slate-200 rounded-md"></div>
        <div className="h-4 w-1/2 bg-slate-100 rounded-md mt-2"></div>
      </div>
      <div className="bg-white border border-slate-100 rounded-lg p-4 flex flex-col justify-end">
        <div className="h-6 w-3/4 bg-slate-200 rounded-md"></div>
        <div className="h-4 w-1/2 bg-slate-100 rounded-md mt-2"></div>
      </div>
    </div>
  </div>
);

export function DualExperience() {
  const [view, setView] = useState("admin");

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          One Platform. Two Experiences.
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Powerfully simple for residents, comprehensively detailed for
          administrators.
        </p>

        <div className="flex justify-center my-10">
          <div className="relative flex w-auto items-center rounded-full bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setView("admin")}
              className={`relative z-10 w-36 rounded-full py-2.5 text-sm font-medium transition-colors ${
                view === "admin" ? "text-white" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Admin View
            </button>
            <button
              onClick={() => setView("resident")}
              className={`relative z-10 w-36 rounded-full py-2.5 text-sm font-medium transition-colors ${
                view === "resident" ? "text-white" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Resident View
            </button>
            <motion.div
              layoutId="toggle-pill-background"
              className="absolute inset-0 z-0 h-full w-36 rounded-full bg-dark-slate"
              initial={false}
              animate={{ x: view === "admin" ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {view === "admin" ? <AdminView /> : <ResidentView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
