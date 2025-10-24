"use client";

import React, { useState } from 'react';

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

const UsersIcon = ({ className = '', ...props }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CalendarDays = ({ className = '', ...props }) => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

// --- NEW ICONS FOR ADMIN ACTIONS ---
const PlusIcon = ({ className = '', ...props }) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PencilIcon = ({ className = '', ...props }) => (
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
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const TrashIcon = ({ className = '', ...props }) => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
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

// --- Modern Glassy Navbar (Mobile-First & Updated) ---
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between h-16 px-4 sm:px-8 md:px-12 bg-black/50 backdrop-blur-lg border-b border-zinc-800">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <Code2 className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold text-white hidden sm:block">
            GCC KEC Admin
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Site Settings
          </a>
          <Button variant="default">
            View Site
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg border-b border-zinc-800 shadow-xl">
          <div className="flex flex-col gap-4 p-6">
            <a href="#" className="text-lg text-zinc-300 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-lg text-zinc-300 hover:text-white transition-colors">
              Site Settings
            </a>
            <Separator className="my-2 bg-zinc-700" />
            <Button variant="default" className="w-full">
              View Site
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

// --- Reusable Stat Card Component ---
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
}

const StatCard = ({ title, value, icon: Icon }: StatCardProps) => (
  <Card className="p-6 flex items-center gap-4">
    <div className="p-3 rounded-lg bg-zinc-800">
      <Icon className="w-6 h-6 text-zinc-300" />
    </div>
    <div>
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </Card>
);


// --- Main Admin Page Component ---
export default function AdminPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />

      {/* Main content section, padded to avoid navbar overlap and allow scrolling */}
      <section className="w-full px-4 pt-24 pb-16">
        {/* Use max-w-7xl for a wide dashboard layout */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Page Header */}
          <div className="space-y-1">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
               Admin Dashboard
            </h1>
            <p className="text-lg text-zinc-400">
              Manage your club's content, members, and events.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Members" value="6" icon={UsersIcon} />
            <StatCard title="Upcoming Events" value="3" icon={CalendarDays} />
            <StatCard title="Active Projects" value="4" icon={Code2} />
          </div>

          <Separator className="bg-zinc-700" />

          {/* Management Sections */}
          <div className="grid grid-cols-1 gap-8">

            {/* --- Manage Events --- */}
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Manage Events</h2>
                <Button variant="default" className="w-full sm:w-auto">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Create New Event
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                  <thead className="border-b border-zinc-700 text-sm text-zinc-400">
                    <tr>
                      <th className="py-2 px-3">Event Name</th>
                      <th className="py-2 px-3">Date</th>
                      <th className="py-2 px-3">Type</th>
                      <th className="py-2 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="py-3 px-3">Intro to React & Next.js</td>
                      <td className="py-3 px-3 text-zinc-300">Oct 30, 2025</td>
                      <td className="py-3 px-3 text-zinc-300">Workshop</td>
                      <td className="py-3 px-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon"><PencilIcon className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon"><TrashIcon className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="py-3 px-3">GCC Weekly 'CodeSprint'</td>
                      <td className="py-3 px-3 text-zinc-300">Nov 5, 2025</td>
                      <td className="py-3 px-3 text-zinc-300">Contest</td>
                      <td className="py-3 px-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon"><PencilIcon className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon"><TrashIcon className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* --- Manage Projects --- */}
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Manage Projects</h2>
                <Button variant="default" className="w-full sm:w-auto">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Create New Project
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                  <thead className="border-b border-zinc-700 text-sm text-zinc-400">
                    <tr>
                      <th className="py-2 px-3">Project Name</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Members</th>
                      <th className="py-2 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="py-3 px-3">GCC Club Website</td>
                      <td className="py-3 px-3 text-green-400">Active</td>
                      <td className="py-3 px-3 text-zinc-300">3</td>
                      <td className="py-3 px-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon"><PencilIcon className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon"><TrashIcon className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* --- Manage Members --- */}
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Manage Members</h2>
                <Button variant="default" className="w-full sm:w-auto">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add New Member
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                  <thead className="border-b border-zinc-700 text-sm text-zinc-400">
                    <tr>
                      <th className="py-2 px-3">Name</th>
                      <th className="py-2 px-3">Role</th>
                      <th className="py-2 px-3">GitHub</th>
                      <th className="py-2 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="py-3 px-3">Alex Johnson</td>
                      <td className="py-3 px-3 text-blue-400">President</td>
                      <td className="py-3 px-3 text-zinc-300">alexjohnson</td>
                      <td className="py-3 px-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon"><PencilIcon className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon"><TrashIcon className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-800/5m 50">
                      <td className="py-3 px-3">Priya Sharma</td>
                      <td className="py-3 px-3 text-blue-400">Vice President</td>
                      <td className="py-3 px-3 text-zinc-300">priyasharma</td>
                      <td className="py-3 px-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon"><PencilIcon className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon"><TrashIcon className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

          </div>

        </div>
      </section>
    </main>
  );
}