'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. We will get back to you soon.',
    });
    setName('');
    setEmail('');
    setMessage('');
  };

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
            <a href="https://login-klaru.lithiumtech.co" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
        </div>
      </header>
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question or feedback? Fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
