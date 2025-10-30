"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/custom/NavBar";

export default function ContactPage() {
  return (
    <main className="h-screen w-screen bg-black text-white overflow-scroll lg:overflow-hidden relative flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-lg">
        <Navbar />
      </div>

      {/* Main Section */}
      <section className="flex-grow flex flex-col justify-center items-center px-4 pt-28 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Have a question or want to collaborate with the General Coding Club (GCC)?  
            Reach out — we’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
          {/* Contact Info Card */}
          <div className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 space-y-5 text-sm">
            <h2 className="text-xl font-semibold mb-1">Our Contact Info</h2>
            <p className="text-zinc-400 text-sm mb-4">
              Connect with us via email, phone, or visit our campus workspace.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-zinc-400 w-4 h-4" />
                <a href="mailto:gcc@kec.edu.in" className="text-zinc-300 hover:text-white transition">
                  gcc@kec.edu.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-zinc-400 w-4 h-4" />
                <span className="text-zinc-300">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-zinc-400 w-4 h-4" />
                <span className="text-zinc-300 text-sm">
                  Katihar Engineering College, Katihar, Bihar
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-3 text-sm">
                <Link
                  href="https://www.instagram.com/gcc_kec"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Instagram
                </Link>
                <Link
                  href="https://discord.gg/gcc-kec"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Discord
                </Link>
                <Link
                  href="https://github.com/gcc-kec"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 text-sm">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={3}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-medium rounded-md py-1.5 hover:bg-zinc-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-zinc-500 text-xs text-center border-t border-zinc-800 py-3">
        © 2025 General Coding Club, KEC. Built with 💻 by the GCC Web Team.
      </footer>
    </main>
  );
}
