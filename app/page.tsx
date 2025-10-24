"use client";

import Code2 from '@/components/icons/code2';
import MenuIcon from '@/components/icons/MenuIcon';
import XIcon from '@/components/icons/XIcon';
import React, { useState } from 'react';
import Navbar from '@/components/custom/NavBar';



// --- Simulated shadcn/ui Components ---

type ButtonVariantProps = {
  variant?: 'default' | 'outline';
  size?: 'default' | 'icon';
};

const buttonVariants = ({ variant = 'default', size = 'default' }: ButtonVariantProps) => {
  const variantClasses = {
    default: "bg-white text-black hover:bg-zinc-200",
    outline: "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-zinc-200",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
  };

  return `${variantClasses[variant]} ${sizeClasses[size]}`;
};

/**
 * Simulated Button component
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className = '', variant = 'default', size = 'default', ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${buttonVariants({ variant, size })} ${className}`}
    {...props}
  />
);

/**
 * Simulated Card component
 */
const Card = ({ className = '', ...props }) => (
  <div
    className={`rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-white ${className}`}
    {...props}
  />
);

/**
 * Simulated Separator component
 */
const Separator = ({ className = '', ...props }) => (
  <div
    className={`shrink-0 bg-zinc-700 h-[1px] w-full ${className}`}
    {...props}
  />
);


// --- Main App Component (Scrollable) ---

export default function App() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      {/* Add the modern navbar */}
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
          
          {/* Logo (replaces Image component) */}
          <div className="p-4 bg-zinc-900/50 rounded-full border border-zinc-700 mt-10">
            <Code2 className="w-16 h-16 text-white" />
          </div>

          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
               General Coding Club (GCC)
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We host coding contests, hackathons, workshops @ KEC , and build a vibrant community of student developers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Participate</Button>
            <Button variant="outline" className="w-full sm:w-auto">
              View Events
            </Button>
          </div>

          <Separator className="mt-10 bg-zinc-700" />

          {/* --- NEW EVENTS SECTION --- */}
          <section className="w-full space-y-6 mt-25">
            <h2 className="text-4xl font-bold tracking-tight">
              Upcoming Events
            </h2>
            
            {/* Grid for event cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Event Card 1 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-blue-400">Workshop</span>
                  <h3 className="text-xl font-semibold">Intro to React & Next.js</h3>
                  <p className="text-sm text-zinc-400">Oct 30, 2025 | 6:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Learn the fundamentals of React, from components and props to state and hooks, and see how Next.js enhances it.
                </p>
                <Button variant="outline" className="w-full mt-4">Register Now</Button>
              </Card>

              {/* Event Card 2 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-green-400">Contest</span>
                  <h3 className="text-xl font-semibold">GCC Weekly 'CodeSprint'</h3>
                  <p className="text-sm text-zinc-400">Nov 5, 2025 | 8:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Join our weekly competitive programming contest. Solve 3 problems in 90 minutes and climb the leaderboard!
                </p>
                <Button variant="outline" className="w-full mt-4">View Problemset</Button>
              </Card>

              {/* Event Card 3 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-purple-400">Session</span>
                  <h3 className="text-xl font-semibold">Hackathon Prep 101</h3>
                  <p className="text-sm text-zinc-400">Nov 12, 2025 | 5:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Getting ready for the big hackathon? Learn how to brainstorm, build an MVP, and pitch your idea effectively.
                </p>
                <Button variant="outline" className="w-full mt-4">Join Session</Button>
              </Card>

            </div>
          </section>
          {/* --- END OF EVENTS SECTION --- */}

        </div>
      </section>
    </main>
  );
}