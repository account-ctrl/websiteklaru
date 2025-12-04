'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Capabilities } from '@/components/landing/capabilities';
import { DualExperience } from '@/components/landing/dual-experience';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';

export default function Home() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);
  
  if (isUserLoading || user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <main>
        <Hero />
        <Capabilities />
        <DualExperience />
      </main>
      <Footer />
    </div>
  );
}
