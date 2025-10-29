"use client";

import Navbar from '@/components/custom/NavBar';
import React, { useState } from 'react';
import { memberData } from './members';
// --- Simulated Icon Imports ---
// (Re-created as inline SVGs for a single-file component)

const Code2 = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const MenuIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const GithubIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5.2 5.2 0 0 0 18 2H6a5.2 5.2 0 0 0-1 2.5A5.5 5.5 0 0 0 3.5 8c0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4" />
  </svg>
);

const DiscordIcon = ({ className = '', ...props }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <path d="M18.8 3.3c-2.3-1.1-4.8-1.8-7.3-2.1C11.3 1.1 11 1 11 1L10.7 2a13.2 13.2 0 0 0-3.3 0L7 1s-.2.1-.5.3c-2.5.3-5 1-7.3 2.1C-.1 4.7 0 6.4 0 6.4S.9 12 5.1 15.1c0 0 .3.3.6.5a10.4 10.4 0 0 0 6.3 2.1c0 0 .2 0 .3 0a10.4 10.4 0 0 0 6.3-2.1c.3-.2.6-.5.6-.5C23.1 12 24 6.4 24 6.4s.1-1.8-1.2-3.1zM8 12.3c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2zm8 0c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2z" fill="currentColor"/>
    </svg>
);

const MailIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Simulated UI Component Imports ---

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

// --- NEW FORM COMPONENTS ---
const Label = ({ className = '', ...props }) => (
  <label
    className={`text-sm font-medium leading-none text-zinc-300 ${className}`}
    {...props}
  />
);

const Input = ({ className = '', ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${className}`}
    {...props}
  />
);




// --- Member ID Card Component ---
interface MemberData {
  name: string;
  role: string;
  id: string;
  joinDate: string;
  email: string;
  github: string;
  linkedin: string;
  initials: string;
}

const MemberIdCard = ({ member }: { member: MemberData }) => (
  <div className="w-full max-w-lg mx-auto">
    <h2 className="text-2xl font-bold text-center mb-4">Member Verified</h2>
    <Card className="p-0 overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="bg-zinc-800 p-4 border-b border-zinc-700">
        <h3 className="text-lg font-semibold text-center text-white">
          GENERAL CODING CLUB KEC
        </h3>
        <p className="text-xs text-center text-zinc-400">OFFICIAL MEMBER</p>
      </div>

      {/* Verified Badge */}
      <div className="absolute top-20 right-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
        Verified
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <img
            src={`https://placehold.co/128x128/27272a/fafafa?text=${member.initials}`}
            alt={`Profile picture of ${member.name}`}
            className="w-32 h-32 rounded-full border-4 border-zinc-700"
          />
        </div>
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white">{member.name}</h2>
          <p className="text-xl font-medium text-blue-400">{member.role}</p>
          <div className="pt-2">
            <p className="text-sm text-zinc-400">
              <strong>Member ID:</strong> {member.id}
            </p>
            <p className="text-sm text-zinc-400">
              <strong>Member Since:</strong> {member.joinDate}
            </p>
          </div>
        </div>
      </div>

      {/* Footer / Links */}
      <div className="bg-zinc-900 p-4 border-t border-zinc-700 flex justify-center gap-6">
        <a href={`mailto:${member.email}`} aria-label="Email" className="text-zinc-400 hover:text-white transition-colors">
          <MailIcon className="w-6 h-6" />
        </a>
        <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-400 hover:text-white transition-colors">
          <GithubIcon className="w-6 h-6" />
        </a>
        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-white transition-colors">
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>
    </Card>
  </div>
);


// --- Main Verification Page Component ---
export default function MemberVerificationPage() {
  const [memberCode, setMemberCode] = useState('');
  const [foundMember, setFoundMember] = useState<MemberData | null | undefined>(undefined); // undefined: initial, null: not found, object: found
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setFoundMember(undefined);

    // Simulate a quick search
    setTimeout(() => {
      const code = memberCode.trim();
      if (!code) {
        setIsLoading(false);
        return;
      }
      
      const member = memberData.find(m => m.id.toLowerCase() === code.toLowerCase());
      
      if (member) {
        setFoundMember(member);
      } else {
        setFoundMember(null);
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
          
          {/* Page Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Member Verification
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Please enter your official Member ID to generate your virtual ID card.
            </p>
          </div>

          {/* Verification Form */}
          <Card className="max-w-lg mx-auto p-6 md:p-8">
            <form onSubmit={handleVerification} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="memberId" className="text-lg">Member ID</Label>
                <Input
                  id="memberId"
                  type="text"
                  placeholder="e.g., gcc-pres-001"
                  value={memberCode}
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMemberCode(e.target.value)}
                  className="text-lg"
                  autoCapitalize="none"
                />
                <p className="text-xs text-zinc-500">
                  Your Member ID is case-insensitive.
                </p>
              </div>
              <Button 
                type="submit" 
                variant="default" 
                className="w-full text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify & Generate ID'}
              </Button>
            </form>
          </Card>

          <Separator className="bg-zinc-700" />

          {/* Results Area */}
          <div className="mt-4">
            {/* Case 1: Member Found */}
            {foundMember && (
              <MemberIdCard member={foundMember} />
            )}

            {/* Case 2: Member Not Found */}
            {foundMember === null && (
              <Card className="max-w-lg mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Verification Failed</h2>
                <p className="text-lg text-zinc-300">
                  No member was found with the ID: <strong className="text-white">{memberCode}</strong>
                </p>
                <p className="text-zinc-400 mt-2">
                  Please check your code and try again. If the problem persists, contact a club lead.
                </p>
              </Card>
            )}

            {/* Case 3: Initial / Loading (do nothing) */}
          </div>

        </div>
      </section>
    </main>
  );
}
