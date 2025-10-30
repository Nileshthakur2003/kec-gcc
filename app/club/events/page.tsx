"use client";

import React, { useState } from 'react';
import Code2 from '@/components/icons/code2';
import MenuIcon from '@/components/icons/MenuIcon';
import XIcon from '@/components/icons/XIcon';
import CalendarDays from '@/components/icons/CalendarDays';
import Navbar from '@/components/custom/NavBar';
import { eventsData } from './events-data';


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

// --- Reusable Event Card Component ---
interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
  typeColor: string;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
}

const EventCard = ({ title, date, description, type, typeColor, buttonText, buttonVariant = "outline" }: EventCardProps) => (
  <Card className="p-6 space-y-4 text-left flex flex-col">
    <div className="space-y-2">
      <span 
        className="text-xs font-semibold uppercase"
        style={{ color: typeColor || '#38bdf8' }} // Default to a light blue
      >
        {type}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <CalendarDays className="w-4 h-4" />
        <span>{date}</span>
      </div>
    </div>
    <p className="text-zinc-300 text-sm flex-grow">
      {description}
    </p>
    <Button variant={buttonVariant} className="w-full mt-4">
      {buttonText}
    </Button>
  </Card>
);

// --- Event Grid Components ---
const UpcomingEvents = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {eventsData.map((event, index) => (
      <EventCard
        key={index}
        type={event.type}
        typeColor={event.typeColor}
        title={event.title}
        date={event.date}
        description={event.description}
        buttonText="Register Now"
        buttonVariant="default"
      />
    ))}
  </div>
);

const PastEvents = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <EventCard
      type="Workshop"
      typeColor="#34d399"
      title="Git & GitHub Basics"
      date="Oct 1, 2025"
      description="We covered version control, from 'git init' to pull requests. A foundational skill for all developers."
      buttonText="View Slides"
      buttonVariant="outline"
    />
    <EventCard
      type="Contest"
      typeColor="#f87171"
      title="KEC 'Code-a-Thon' 2025"
      date="Sep 15, 2025"
      description="Our first major coding contest of the semester. The competition was fierce!"
      buttonText="See Winners"
      buttonVariant="outline"
    />
    <EventCard
      type="Session"
      typeColor="#c084fc"
      title="Intro to Data Science"
      date="Sep 5, 2025"
      description="An overview of the data science lifecycle, from data collection to visualization with Python libraries."
      buttonText="Get Resources"
      buttonVariant="outline"
    />
  </div>
);

// --- Main Events Page Component ---
export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        {/* Use max-w-5xl for a slightly wider content area for the event grid */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
          
          {/* Page Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
               Club Events
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Check out our upcoming workshops, contests, and sessions.
            </p>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Event Toggles */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setActiveTab('upcoming')}
              className="w-full sm:w-auto"
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'outline'}
              onClick={() => setActiveTab('past')}
              className="w-full sm:w-auto"
            >
              Past Events
            </Button>
          </div>
          
          {/* Event Grids (Conditional) */}
          <div className="mt-4">
            {activeTab === 'upcoming' && <UpcomingEvents />}
            {activeTab === 'past' && <PastEvents />}
          </div>

        </div>
      </section>
    </main>
  );
}