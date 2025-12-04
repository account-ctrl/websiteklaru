import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-8 h-8", className)}
    >
      <rect width="48" height="48" rx="4" fill="hsl(var(--primary))" />
      <path d="M24 16.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-3-5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" fill="#fff"/>
      
      <rect x="52" width="48" height="48" rx="4" fill="hsl(var(--primary))" />
      <path d="M63 29c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm11.2 5.5c-2-.8-4.3-.8-6.2 0-1.6.6-2.8 2.1-3.1 3.8-1.5.8-2.5 2.4-2.5 4.2 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.4-.7-2.7-1.8-3.6.4-1.9.1-3.9-1.4-5.4zM70 16c-1.7 0-3.3.4-4.8 1.1-3-1.4-6.4-2.1-9.9-2.1-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25c0-3.5-.7-6.9-2.1-9.9C76.9 16.4 73.6 16 70 16z" fill="#fff" transform="scale(0.45) translate(65, -10)" />

      <rect y="52" width="48" height="48" rx="4" fill="hsl(var(--primary))" />
      <path d="M21 60h8c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V62c0-1.1.9-2 2-2zm5 10h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M31 60h2.5c1.4 0 2.5 1.1 2.5 2.5V65l-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />


      <rect x="52" y="52" width="48" height="48" rx="4" fill="hsl(var(--primary))" />
      <path d="M76 60c-6.6 0-12 5.4-12 12s12 20 12 20 12-13.4 12-20-5.4-12-12-12zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#fff"/>
    </svg>
  );
}
