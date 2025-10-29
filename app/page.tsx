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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className = '', variant = 'default', size = 'default', ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${buttonVariants({ variant, size })} ${className}`}
    {...props}
  />
);

const Card = ({ className = '', ...props }) => (
  <div
    className={`rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-white ${className}`}
    {...props}
  />
);

const Separator = ({ className = '', ...props }) => (
  <div
    className={`shrink-0 bg-zinc-700 h-[1px] w-full ${className}`}
    {...props}
  />
);

// --- Main App Component ---
export default function App() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="w-full px-4 pt-24 pb-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
          <div className="p-4 bg-zinc-900/50 rounded-full border border-zinc-700 mt-10">
            <Code2 className="w-16 h-16 text-white" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              General Coding Club (GCC)
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We host coding contests, hackathons, workshops @ KEC, and build a vibrant community of student developers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Participate</Button>
            <Button variant="outline" className="w-full sm:w-auto">View Events</Button>
          </div>

          <Separator className="mt-10 bg-zinc-700" />


          {/* --- EVENTS SECTION --- */}
          <section id="events" className="w-full space-y-6 mt-25">
            <h2 className="text-4xl font-bold tracking-tight">Upcoming Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event 1 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-blue-400">Workshop</span>
                  <h3 className="text-xl font-semibold">Intro to React & Next.js</h3>
                  <p className="text-sm text-zinc-400">Oct 30, 2025 | 6:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Learn the fundamentals of React, from components and hooks to server rendering with Next.js.
                </p>
                <Button variant="outline" className="w-full mt-4">Register Now</Button>
              </Card>

              {/* Event 2 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-green-400">Contest</span>
                  <h3 className="text-xl font-semibold">GCC Weekly 'CodeSprint'</h3>
                  <p className="text-sm text-zinc-400">Nov 5, 2025 | 8:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Join our weekly competitive programming contest and test your problem-solving speed!
                </p>
                <Button variant="outline" className="w-full mt-4">View Problemset</Button>
              </Card>

              {/* Event 3 */}
              <Card className="p-6 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-purple-400">Session</span>
                  <h3 className="text-xl font-semibold">Hackathon Prep 101</h3>
                  <p className="text-sm text-zinc-400">Nov 12, 2025 | 5:00 PM IST</p>
                </div>
                <p className="text-zinc-300 text-sm">
                  Learn how to brainstorm ideas, form teams, and pitch effectively in hackathons.
                </p>
                <Button variant="outline" className="w-full mt-4">Join Session</Button>
              </Card>
            </div>
          </section>
        </div>
      </section>

    {/* --- ABOUT SECTION --- */}
          <section id="about" className="w-full py-24 bg-zinc-950 text-center px-4">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="max-w-3xl mx-auto text-zinc-400 text-lg">
              The General Coding Club (GCC) at KEC is dedicated to fostering coding excellence, innovation,
              and collaboration among students. We conduct workshops, peer learning sessions, and open-source projects
              to help members explore development, AI, and problem-solving skills.
            </p>
          </section>

          {/* <Separator className="mt-10 bg-zinc-700" /> */}

      {/* --- PROJECTS/INITIATIVES SECTION --- */}
      <section id="initiatives" className="w-full py-24 bg-black text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Our Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Hackathons & Innovation</h3>
            <p className="text-zinc-400 text-sm">
              Encouraging students to participate in national-level hackathons and build real-world impactful projects.
            </p>
          </Card>
          <Card className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Open Source Drives</h3>
            <p className="text-zinc-400 text-sm">
              Promoting open-source culture through events like Hacktoberfest and GitHub contribution sessions.
            </p>
          </Card>
          <Card className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>
            <p className="text-zinc-400 text-sm">
              Weekly peer-to-peer coding sessions to enhance logical thinking and algorithmic problem-solving.
            </p>
          </Card>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full py-24 bg-zinc-950 text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-zinc-400 mb-8">
          Have queries or want to collaborate? Drop us a message!
        </p>
        <Button className="mx-auto px-8">Contact Us</Button>
      </section>

      <footer className="py-6 text-center text-sm text-zinc-600 border-t border-zinc-800">
        © 2025 General Coding Club, KEC. All rights reserved.
      </footer>
    </main>
  );
}
