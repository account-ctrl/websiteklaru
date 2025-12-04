"use client";

import { motion } from "framer-motion";
import { AlertTriangle, File, Megaphone } from "lucide-react";

const capabilities = [
  {
    title: "Rapid Response System",
    icon: AlertTriangle,
    color: "accent-rose",
    animation: "ripple",
  },
  {
    title: "Digital Issuances",
    icon: File,
    color: "accent-cyan",
    animation: "slide",
  },
  {
    title: "Community Broadcasts",
    icon: Megaphone,
    color: "accent-amber",
    animation: "tilt",
  },
];

const IconAnimation = ({ animation, color, Icon }: { animation: string, color: string, Icon: React.ElementType }) => {
  const iconClass = `w-16 h-16 text-${color}`;

  switch (animation) {
    case "ripple":
      return (
        <div className="relative flex items-center justify-center w-24 h-24">
          <Icon className={iconClass} />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-${color}/20 animate-ripple`}
            style={{ animationDelay: "0s" }}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-${color}/20 animate-ripple`}
            style={{ animationDelay: "1s" }}
          />
        </div>
      );
    case "slide":
      return (
        <motion.div
          className="relative h-16 w-16"
          initial="initial"
          whileHover="hover"
          animate="initial"
        >
          <motion.div className="absolute top-0 left-0">
            <Icon className={`w-16 h-16 text-${color} opacity-50`} />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={{
              initial: { x: 0, y: 0 },
              hover: { x: 8, y: -8 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className={iconClass} />
          </motion.div>
        </motion.div>
      );
    case "tilt":
      return (
        <motion.div
          whileHover={{ rotate: -15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Icon className={iconClass} />
        </motion.div>
      );
    default:
      return <Icon className={iconClass} />;
  }
};

export function Capabilities() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for Modern Governance
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            KlaroGov provides an integrated suite of tools to connect with your
            community, streamline services, and respond effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 rounded-3xl shadow-soft h-full flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-grow flex items-center justify-center aspect-square">
                 <IconAnimation animation={item.animation} color={item.color} Icon={item.icon} />
              </div>
              <p className="mt-6 text-lg font-semibold text-foreground">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
