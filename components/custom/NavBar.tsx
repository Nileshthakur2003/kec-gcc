import { useState } from "react";
import Code2 from "../icons/code2";
import { Separator } from "@radix-ui/react-separator";
import { XIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between h-16 px-4 sm:px-8 md:px-12 bg-black/50 backdrop-blur-lg border-b border-zinc-800">
        {/* Logo and Title */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <Code2 className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold text-white hidden sm:block">
            GCC KEC
          </span>
        </a>

        {/* Desktop Nav Links & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/club/events" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Events
          </a>
          <a href="/club/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="/club/community" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Community
          </a>
          <a href="/club/policy" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Policy
          </a>
          <Button variant="link">
            Participate
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg border-b border-zinc-800 shadow-xl">
          <div className="flex flex-col gap-4 p-6">
            <a href="/club/events" className="text-lg text-zinc-300 hover:text-white transition-colors">
              Events
            </a>
            <a href="/club/projects" className="text-lg text-zinc-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="/club/community" className="text-lg text-zinc-300 hover:text-white transition-colors">
              Community
            </a>
            <Separator className="my-2 bg-zinc-700" />
            <Button variant="default" className="w-full">
              Participate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;