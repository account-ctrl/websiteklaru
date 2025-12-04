import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/KlaroGov Logo.png"
      alt="KlaroGov Logo"
      width={32}
      height={32}
      className={cn("w-8 h-8", className)}
    />
  );
}
