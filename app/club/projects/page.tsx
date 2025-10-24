"use client";

import React, { useState } from 'react';
import Code2 from '@/components/icons/code2';
import MenuIcon from '@/components/icons/MenuIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import XIcon from '@/components/icons/XIcon';
import UsersIcon from '@/components/icons/UsersIcon';
import ChevronDownIcon from '@/components/icons/ChevronDown';
import GlobeIcon from '@/components/icons/GlobeIcon';
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


// --- Reusable Project Card Component (UPDATED) ---
interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  tech: string[];
  repoLink: string;
  demoLink?: string;
  members?: string[]; // <-- NEW PROP
}

const ProjectCard = ({ title, description, status, statusColor, tech, repoLink, demoLink, members }: ProjectCardProps) => {
  // --- NEW STATE FOR ACCORDION ---
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  
  return (
    <Card className="p-6 text-left flex flex-col">
      {/* Header */}
      <div className="space-y-2">
        <span 
          className="text-xs font-semibold uppercase"
          style={{ color: statusColor || '#38bdf8' }}
        >
          {status}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-zinc-300 text-sm flex-grow my-4">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-xs uppercase text-zinc-500 font-semibold mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* --- NEW MEMBERS ACCORDION --- */}
      {members && members.length > 0 && (
        <div className="border-t border-zinc-700 pt-4 mt-4">
          <button
            onClick={() => setIsMembersOpen(!isMembersOpen)}
            className="flex justify-between items-center w-full text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            aria-expanded={isMembersOpen}
          >
            <span>{isMembersOpen ? 'Hide' : 'Show'} Contributors ({members.length})</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isMembersOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Collapsible Content */}
          {isMembersOpen && (
            <div className="mt-4 pl-2 space-y-2 border-l border-zinc-700">
              {members.map((member) => (
                <p key={member} className="text-sm text-zinc-400">{member}</p>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Links/Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">
            <GithubIcon className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="default" className="w-full">
              <GlobeIcon className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
};

// --- Project Grid Components (UPDATED with members) ---
const ClubProjects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      title="GCC Club Website"
      status="Active"
      statusColor="#34d399" // green-400
      description="The official website for the General Coding Club @ KEC. Built to showcase events, projects, and our community."
      tech={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
      repoLink="https://github.com/gcc-kec/club-website"
      demoLink="#"
      members={["Alex Johnson", "Priya Sharma", "Rohan Gupta"]}
    />
    <ProjectCard
      title="AIVerse Discord Bot"
      status="Active"
      statusColor="#34d399" // green-400
      description="A multi-functional Discord bot for the AIVerse club, featuring session reminders, resource linking, and Q&A moderation."
      tech={["Python", "discord.py", "Firebase"]}
      repoLink="https://github.com/averse-kec/discord-bot"
      members={["Sam Chen", "Meera Kumar"]}
    />
    <ProjectCard
      title="KEC Event Alerter"
      status="Completed"
      statusColor="#9ca3af" // gray-400
      description="A simple web scraper and notification service that alerts students about new notices and events on the college website."
      tech={["Node.js", "Puppeteer", "Nodemailer"]}
      repoLink="https://github.com/gcc-kec/kec-alerter"
      members={["Rohan Gupta"]}
    />
  </div>
);

const MemberProjects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      title="Dev's Portfolio"
      status="In Progress"
      statusColor="#fde047" // yellow-300
      description="A personal portfolio website to showcase skills, projects, and write blog posts about web development."
      tech={["Astro", "React", "Markdown", "Tailwind CSS"]}
      repoLink="#"
      demoLink="#"
      members={["Dev Patel"]}
    />
    <ProjectCard
      title="Weather App"
      status="Completed"
      statusColor="#9ca3af" // gray-400
      description="A clean weather dashboard that fetches and displays real-time weather data from the OpenWeatherMap API."
      tech={["React", "Vite", "REST API"]}
      repoLink="#"
      demoLink="#"
      members={["Ananya Singh"]}
    />
    <ProjectCard
      title="Chatter: Real-time Chat"
      status="In Progress"
      statusColor="#fde047" // yellow-300
      description="A full-stack, real-time chat application built using Socket.IO, Express, and a React frontend."
      tech={["Socket.IO", "Express", "Node.js", "React"]}
      repoLink="#"
      members={["Vikram Rao", "Tina Liu"]}
    />
  </div>
);


// --- Main Projects Page Component ---
export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('club'); // 'club' or 'member'

  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        {/* Use max-w-5xl for a slightly wider content area for the project grid */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
          
          {/* Page Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
               Club Projects
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              See what our members are building, from official club tools to personal passion projects.
            </p>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Project Toggles */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant={activeTab === 'club' ? 'default' : 'outline'}
              onClick={() => setActiveTab('club')}
              className="w-full sm:w-auto"
            >
              <UsersIcon className="w-4 h-4 mr-2" />
              Club Projects
            </Button>
            <Button
              variant={activeTab === 'member' ? 'default' : 'outline'}
              onClick={() => setActiveTab('member')}
              className="w-full sm:w-auto"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Member Showcase
            </Button>
          </div>
          
          {/* Project Grids (Conditional) */}
          <div className="mt-4">
            {activeTab === 'club' && <ClubProjects />}
            {activeTab === 'member' && <MemberProjects />}
          </div>

        </div>
      </section>
    </main>
  );
}