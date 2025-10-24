"use client";

import React, { useState } from 'react';
import Code2 from '@/components/icons/code2';
import MenuIcon from '@/components/icons/MenuIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import DiscordIcon from '@/components/icons/DiscordIcon';
import XIcon from '@/components/icons/XIcon';
import MailIcon from '@/components/icons/MailIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import Navbar from '@/components/custom/NavBar';

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

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & ButtonVariantProps & { className?: string };

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


// --- Reusable Member Card Component ---
interface MemberCardProps {
  name: string;
  role: string;
  initials: string;
  github: string;
  linkedin: string;
  email: string;
}

const MemberCard = ({ name, role, initials, github, linkedin, email }: MemberCardProps) => (
  <Card className="p-6 text-center flex flex-col items-center">
    <img
      // Using placehold.co for image placeholders
      src={`https://placehold.co/96x96/27272a/fafafa?text=${initials}`}
      alt={`Profile picture of ${name}`}
      className="w-24 h-24 rounded-full border-2 border-zinc-700 mb-4"
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-sm text-blue-400 font-medium">{role}</p>

    <div className="flex-grow" /> {/* Pushes social links to the bottom */}
    
    <div className="flex justify-center gap-5 mt-6">
      <a
        href={`mailto:${email}`}
        aria-label={`Email ${name}`}
        className="text-zinc-400 hover:text-white transition-colors"
      >
        <MailIcon className="w-5 h-5" />
      </a>
      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}'s GitHub Profile`}
        className="text-zinc-400 hover:text-white transition-colors"
      >
        <GithubIcon className="w-5 h-5" />
      </a>
      <a
        href={`https://linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}'s LinkedIn Profile`}
        className="text-zinc-400 hover:text-white transition-colors"
      >
        <LinkedinIcon className="w-5 h-5" />
      </a>
    </div>
  </Card>
);


// --- Main Community Page Component ---
export default function CommunityPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        {/* Use max-w-5xl for a slightly wider content area for the grid */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
          
          {/* Page Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
               Meet Our Team
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              The core members & leads driving the General Coding Club forward.
            </p>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Core Team Grid Section */}
          <section className="w-full space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Core Leads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <MemberCard
                name="TBD"
                role="President"
                initials="TBD"
                email="TBD@example.com"
                github="TBD-dev"
                linkedin="TBD-dev"
              />
              <MemberCard
                name="TBD"
                role="Vice President"
                initials="TBD"
                email="TBD@example.com"
                github="TBD-vp"
                linkedin="TBD-eng"
              />
              <MemberCard
                name="TBD"
                role="Events Lead"
                initials="TBD"
                email="TBD@example.com"
                github="TBD-events"
                linkedin="TBD-events"
              />
              <MemberCard
                name="TBD"
                role="Projects Lead"
                initials="TBD"
                email="TBD@example.com"
                github="TBD-projects"
                linkedin="TBD-design"
              />
              <MemberCard
                name="TBD"
                role="Community Lead"
                initials="TBD"
                email="TBD@example.com"
                github="TBD"
                linkedin="TBD"
              />
               <MemberCard
                name="TBD"
                role="Treasurer"
                initials="TBD"
                email="TBD@example.com"
                github="TBD-finance"
                linkedin="TBD"
              />
            </div>
          </section>

          <Separator className="bg-zinc-700" />

          {/* Join Us CTA */}
          <section className="w-full">
            <Card className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Join the Community!
              </h2>
              <p className="text-lg text-zinc-400 max-w-xl mx-auto">
                Whether you're a beginner just starting out or an expert looking to mentor, there's a place for you at GCC.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="default" className="w-full sm:w-auto">
                  <DiscordIcon className="w-5 h-5 mr-2" />
                  Join our Discord
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <GithubIcon className="w-5 h-5 mr-2" />
                  Follow on GitHub
                </Button>
              </div>
            </Card>
          </section>

        </div>
      </section>
    </main>
  );
}