'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://demo-klaru.lithiumtech.co';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
       <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div>
    </div>
  );
}
