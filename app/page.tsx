import Image from 'next/image';
import Link from 'next/link';
import { Waves, Thermometer, Timer, Heart, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

function Button({ className = '', variant = 'default', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4';
  
  const variantStyles = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props} 
    />
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
      {children}
    </Link>
  );
}

function NavLinks() {
  return (
    <nav className="flex items-center space-x-6">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#specs">Specs</NavLink>
      <Button variant="outline">Buy Now</Button>
    </nav>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Cold Plunge
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}

function HeroContent() {
  return (
    <div className="lg:pr-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
        Transform Your Recovery
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Experience the ultimate cold therapy solution. Our premium Cold Plunge combines 
        elegant design with powerful temperature control for optimal wellness.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="text-base w-full sm:w-auto">Buy Now - $4,990</Button>
        <Button variant="secondary" className="text-base w-full sm:w-auto group">
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      <Image
        src="https://utfs.io/f/zFibHTZPUFWoA0YtlexquEYGaL7xyjHCWm236vDwXepF5rVo"
        alt="Cold Plunge"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Waves,
    title: 'Advanced Cooling',
    description: 'Maintains perfect temperature between 39-55°F (4-13°C)'
  },
  {
    icon: Thermometer,
    title: 'Precise Control',
    description: 'Digital temperature control with real-time monitoring'
  },
  {
    icon: Timer,
    title: 'Quick Setup',
    description: 'Ready to use in under 15 minutes, no plumbing required'
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Enhance recovery, reduce inflammation, improve sleep'
  }
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductFeatures() {
  return (
    <section id="features" className="bg-gray-50 border-y border-gray-200 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <Image
              src="https://utfs.io/f/zFibHTZPUFWozoaW26ZPUFWo7hj4BuK1SEryAYfzNepIl82L"
              alt="Cold Plunge Product"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineered for Excellence</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Cold Plunge tub combines cutting-edge technology with elegant design. 
              The powerful cooling system maintains your desired temperature, while the 
              sleek exterior complements any space.
            </p>
            <ul className="space-y-4">
              {['Marine-grade stainless steel interior', 'Energy-efficient cooling system', 'Built-in filtration system', 'Smart temperature control'].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const specifications = [
  { label: "Dimensions", value: '67" L x 31.5" W x 24" H' },
  { label: "Water Capacity", value: "100 Gallons" },
  { label: "Temperature Range", value: "39°F - 55°F" },
  { label: "Power", value: "110V, 15 Amp Circuit" },
  { label: "Interior Material", value: "Marine Grade Stainless Steel" },
  { label: "Exterior Material", value: "Weather Resistant Metal" },
  { label: "Trim", value: "Premium Hardwood" },
  { label: "Warranty", value: "5 Year Limited" }
];

function SpecificationsSection() {
  return (
    <section id="specs" className="bg-gray-50 border-y border-gray-200 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Specifications</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden">
          {specifications.map((spec, index) => (
            <div key={index} className="flex justify-between py-4 px-6 border-b border-gray-100 last:border-b-0">
              <span className="font-medium text-gray-900">{spec.label}</span>
              <span className="text-gray-600">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Recovery?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of athletes and health enthusiasts who have made Cold Plunge 
            an essential part of their wellness routine.
          </p>
          <Button className="text-base px-8 py-3 h-auto">
            Order Your Cold Plunge Today
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 mb-4 md:mb-0">© 2024 Cold Plunge. All rights reserved.</span>
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <ProductFeatures />
        <ProductShowcase />
        <SpecificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
