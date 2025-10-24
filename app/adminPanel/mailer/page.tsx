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

const SendIcon = ({ className = '', ...props }) => (
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
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
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

// --- FORM COMPONENTS ---
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

const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`flex min-h-[200px] w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${className}`}
    {...props}
  />
);

// --- NEW SELECT COMPONENT ---
const Select = ({ className = '', children, ...props }: { className?: string, children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={`flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black ${className}`}
    {...props}
  >
    {children}
  </select>
);


// --- Modern Glassy Navbar (Admin) ---
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
          <a href="#" className="text-sm text-white font-semibold transition-colors">
            Mailer
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
            <a href="#" className="text-lg text-white font-semibold transition-colors">
              Mailer
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

/**
 * Simulates a basic Markdown to HTML conversion for the preview
 */
const simulatedMarkdownToHtml = (text: string): string => {
  const lines = text.split('\n');
  
  const processedLines = lines.map(line => {
    // Headings
    if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mb-3 mt-4">${line.substring(3)}</h2>`;
    if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold mb-4 mt-5">${line.substring(2)}</h2>`;
    
    // Horizontal Rule
    if (line.trim() === '---') return '<hr class="my-6 border-zinc-300" />';
    
    // Empty line (for spacing)
    if (line.trim() === '') return '<br />';
    
    // Apply inline styling
    let inlineProcessed = line
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-blue-600 underline" target="_blank">$1</a>');

    // Wrap in paragraph
    return `<p class="mb-4 text-zinc-700">${inlineProcessed}</p>`;
  });
  
  return processedLines.join('');
};

// --- NEW: Mail Templates Data ---
const mailTemplates = [
  {
    id: 'default',
    name: 'Select a template...',
    subject: '',
    body: ''
  },
  {
    id: 'welcome',
    name: 'Welcome New Member',
    subject: 'Welcome to the GCC KEC!',
    body: "## Welcome to the Club!\n\nHi [Name],\n\nWe are so excited to have you join the General Coding Club at KEC.\n\nHere are a few next steps:\n* Join our [Discord Server](https://discord.gg/example)\n* Follow us on [GitHub](https://github.com/gcc-kec)\n\nWe look forward to seeing you at our next event!\n\nBest,\nThe GCC Team"
  },
  {
    id: 'event-announce',
    name: 'Event Announcement',
    subject: '[EVENT] Announcing: [Event Name]',
    body: "# You're Invited! 🚀\n\nHi everyone,\n\nWe are thrilled to announce our next event: **[Event Name]**!\n\n* **Date:** [Date]\n* **Time:** [Time]\n* **Location:** [Location/Link]\n\n[Add a short description of the event here.]\n\n[Register Here](https://forms.gle/example)\n\nSee you there!"
  },
  {
    id: 'contest-reminder',
    name: 'Contest Reminder',
    subject: 'Reminder: [Contest Name] is Tomorrow!',
    body: "## Don't Forget! ⏰\n\nHi coders,\n\nThis is a quick reminder that our coding contest, **[Contest Name]**, is happening tomorrow, [Date] at [Time].\n\nBe sure to [Register Here](https://forms.gle/example) if you haven't already.\n\nGet ready to solve some problems!\n\nGood luck,\nThe GCC Team"
  },
  {
    id: 'project-showcase',
    name: 'Project Showcase Call',
    subject: 'Showcase Your Project with GCC!',
    body: "## Built Something Cool?\n\nHi [Name],\n\nWe're looking for awesome projects built by our members to feature in our next **Member Showcase**!\n\nIf you have a project you'd like to share, please reply to this email with:\n1.  Project Name\n2.  A brief description\n3.  Link to your GitHub repo\n4.  (Optional) A live demo link\n\nWe can't wait to see what you've built!\n\nBest,\nThe GCC Team"
  }
];


// --- Main Custom Mailer Page Component ---
export default function CustomMailerPage() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });

  // --- NEW: Handler for template dropdown ---
  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const templateId = e.target.value;
    const template = mailTemplates.find(t => t.id === templateId);

    if (template && template.id !== 'default') {
      setSubject(template.subject);
      setBody(template.body);
    } else {
      // Clear fields if "Select a template" is chosen
      setSubject('');
      setBody('');
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', message: '' });

    const toArray = to.split(',').map(email => email.trim()).filter(email => email.length > 0);

    if (toArray.length === 0) {
      setStatusMessage({ type: 'error', message: 'Please enter at least one recipient.' });
      setIsLoading(false);
      return;
    }
    
    if (!subject) {
      setStatusMessage({ type: 'error', message: 'Please enter a subject.' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: toArray,
          subject: subject,
          body: body,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setStatusMessage({ type: 'success', message: 'Email sent successfully!' });
      // Clear form on success
      // setTo('');
      // setSubject('');
      // setBody('');

    } catch (error) {
      const err = error as Error;
      console.error('Fetch Error:', err);
      setStatusMessage({ type: 'error', message: err.message || 'An unknown error occurred.' });
    } finally {
      setIsLoading(false);
    }
  };



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
               Custom Mailer
            </h1>
            <p className="text-lg text-zinc-400">
              Construct and send custom emails to members.
            </p>
          </div>

          {/* Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* --- Column 1: Composer --- */}
            <Card className="p-6">
              <form onSubmit={handleSendMail} className="space-y-6">
                
                {/* --- NEW: Template Select --- */}
                <div className="space-y-2">
                  <Label htmlFor="template">Load Template</Label>
                  <Select id="template" onChange={handleTemplateChange}>
                    {mailTemplates.map((template) => (
                      <option key={template.id} value={template.id}>
                        {template.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <Separator className="bg-zinc-700" />
                
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <Input
                    id="to"
                    type="email"
                    placeholder="member1@example.com, member2@example.com"
                    value={to}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTo(e.target.value)}
                    disabled={isLoading}
                  />
                  <p className="text-xs text-zinc-500">
                    Separate multiple emails with a comma.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="GCC Weekly Event Update"
                    value={subject}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSubject(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="body">Body (Markdown)</Label>
                  <Textarea
                    id="body"
                    className="min-h-[400px] font-mono"
                    placeholder="Write your content here...&#10;&#10;# This is a heading&#10;**This is bold text**"
                    value={body}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setBody(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                
                {/* --- Show Status Message --- */}
                {statusMessage.message && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      statusMessage.type === 'success'
                        ? 'bg-green-800 text-green-100'
                        : 'bg-red-800 text-red-100'
                    }`}
                  >
                    {statusMessage.message}
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="default" 
                  className="w-full sm:w-auto"
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? (
                    'Sending...' // Show loading text
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4 mr-2" />
                      Send Email
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* --- Column 2: Live Preview --- */}
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-zinc-700">
                Live Email Preview
              </h2>
              
              {/* This div simulates the email client's white background */}
              <div className="bg-white rounded-md p-6 min-h-[500px] text-black font-sans">
                <div className="border-b border-zinc-300 pb-3 mb-5">
                  <p className="text-sm text-zinc-500">Subject: </p>
                  <h2 className="text-xl font-semibold text-zinc-800">
                    {subject || "Your Subject Here"}
                  </h2>
                </div>
                
                {/* Email Body */}
                <div
                  className="prose prose-zinc"
                  dangerouslySetInnerHTML={{ __html: simulatedMarkdownToHtml(body || "<p class='text-zinc-400'>Your email content will appear here...</p>") }}
                />
              </div>
            </Card>

          </div>
        </div>
      </section>
    </main>
  );
}
