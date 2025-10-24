"use client";

import React, { useState } from 'react';
import Navbar from '@/components/custom/NavBar';
// --- Simulated lucide-react icons ---
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

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & ButtonVariantProps & { className?: string };

const Button: React.FC<ButtonProps> = ({ className = '', variant = 'default', size = 'default', ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${buttonVariants({ variant, size })} ${className}`}
    {...props}
  />
);

const Separator = ({ className = '', ...props }) => (
  <div
    className={`shrink-0 bg-zinc-700 h-[1px] w-full ${className}`}
    {...props}
  />
);

// --- ADDED CARD COMPONENT ---
/**
 * Simulated Card component (and its parts)
 */
const Card = ({ className = '', ...props }) => (
  <div
    className={`rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm text-white ${className}`}
    {...props}
  />
);

// --- NEW REUSABLE POLICY SECTION COMPONENT ---
/**
 * A reusable component to wrap each policy section in a Card.
 * Simulates shadcn/ui CardHeader, CardTitle, and CardContent.
 */
const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Card>
    {/* CardHeader */}
    <div className="p-6">
      {/* CardTitle */}
      <h2 className="text-xl font-semibold leading-none tracking-tight">{title}</h2>
    </div>
    {/* CardContent */}
    <div className="p-6 pt-0 text-zinc-300 space-y-4">
      {children}
    </div>
  </Card>
);




// --- Main Terms & Policy Page Component ---
export default function PolicyPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        {/* Use max-w-4xl for a comfortable reading width */}
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* Page Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
               Terms, Conditions & Policy
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Our commitment to a safe, respectful, and collaborative community.
            </p>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Policy Content - REWORKED */}
          <div className="space-y-6">
            <p className="text-lg text-zinc-300">
              Welcome to the General Coding Club (GCC) at Katihar Engineering College (KEC). By participating in our events, contributing to our projects, or joining our online communities (like Discord), you agree to abide by the following terms, conditions, and policies.
            </p>

            <PolicySection title="Code of Conduct">
              <p>
                GCC is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion. We do not tolerate harassment of participants in any form.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Be respectful, welcoming, and professional.</li>
                <li>Do not use sexualized language or imagery.</li>
                <li>Refrain from insulting, demeaning, or harassing comments.</li>
                <li>Respect differences of opinion.</li>
              </ul>
              <p>
                Participants violating these rules may be sanctioned or expelled from the event or community at the discretion of the club leads.
              </p>
            </PolicySection>

            <PolicySection title="Membership">
              <p>
                Membership is open to all students of KEC, regardless of branch or year, who have an interest in coding and technology. There are no membership fees. Active participation is encouraged but not mandatory. However, only active members may be considered for leadership roles or official club projects.
              </p>
            </PolicySection>
            
            <PolicySection title="Event Policy">
              <p>
                Our events (workshops, contests, sessions) are organized for educational and community-building purposes.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>All registered participants are expected to adhere to the Code of Conduct.</li>
                <li>Plagiarism or any form of cheating during contests will result in disqualification and potential suspension from future events.</li>
                <li>Photographs or video may be taken at events for promotional purposes. By attending, you grant GCC permission to use this media.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Project & Data Policy">
              <p>
                GCC facilitates both official club projects and a showcase for member projects.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Club Projects:</strong> Code written for official GCC projects (e.g., this website) is typically open-source under an MIT License unless specified otherwise. Contributors must follow the repository's contribution guidelines.
                </li>
                <li>
                  <strong>Member Showcase:</strong> By submitting your project to the showcase, you grant GCC permission to display its name, description, and links on our website. You retain all ownership and rights to your personal project.
                </li>
                <li>
                  <strong>Data:</strong> We respect your privacy. Any personal information collected (e.g., for event registration) will be used solely for club communication and operations. We will not sell or distribute your personal data to third parties.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Disclaimer">
              <p>
                The General Coding Club (GCC) is a student-run organization at KEC. While we strive for accuracy and quality, all information, resources, and code provided by the club are on an "as-is" basis. GCC and its members are not liable for any damages or issues arising from the use of code or information shared in workshops, projects, or online discussions.
              </p>
            </PolicySection>

            <PolicySection title="Changes to this Policy">
              <p>
                We may update these policies from time to time. Any significant changes will be announced to the community. Continued participation in club activities after such changes constitutes acceptance of the new terms.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p>
                If you have any questions about these policies or wish to report a violation of the Code of Conduct, please contact one of the club leads or email us at <a href="mailto:gcc.kec@gmail.com" className="text-blue-400 hover:text-blue-300 underline">gec.kec@gmail.com</a>.
              </p>
            </PolicySection>
          </div>

        </div>
      </section>
    </main>
  );
}

