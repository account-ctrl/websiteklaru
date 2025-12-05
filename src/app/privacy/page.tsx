'use client';

import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);


  return (
    <>
     <header className="absolute top-0 left-0 right-0 z-20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <Logo />
          <span>KlaroGov</span>
        </Link>
        <Button
          asChild
          variant="secondary"
        >
          <a href="https://login-klaro.lithiumtech.co" target="_blank" rel="noopener noreferrer">Login</a>
        </Button>
      </div>
    </header>
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Privacy Policy</h1>
        
        <p>Last Updated: {date}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to KlaroGov. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <p>
          We may collect personal information from you such as your name, email address, and other details when you register for an account or use our services. We also collect non-personal information, such as browser type and usage data.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">2.1. Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve, personalize, and expand our services.</li>
          <li>Understand and analyze how you use our services.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>Communicate with you, either directly or through one of our partners.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
