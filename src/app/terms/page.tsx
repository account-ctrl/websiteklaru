import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
    <header className="absolute top-0 left-0 right-0 z-20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          KlaroGov
        </Link>
        <Button
          asChild
          variant="secondary"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Terms of Service</h1>
        
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
        <p>
          By using our platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Accounts</h2>
        <p>
          When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of KlaroGov and its licensors.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
        <p>
          In no event shall KlaroGov, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
