"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Have a question, an idea, or want to collaborate with the General Coding Club (GCC)?
          Reach out to us through any of the options below. We’d love to hear from you!
        </p>
      </section>

      {/* Contact Info + Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Contact Info Card */}
        <div className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-2">Our Contact Info</h2>
          <p className="text-zinc-400 text-sm mb-6">
            You can connect with us through email, social platforms, or visit us at our campus workspace.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="text-zinc-400 w-5 h-5" />
              <a
                href="mailto:gcc@kec.edu.in"
                className="text-zinc-300 hover:text-white transition"
              >
                gcc@kec.edu.in
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-zinc-400 w-5 h-5" />
              <span className="text-zinc-300">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-zinc-400 w-5 h-5" />
              <span className="text-zinc-300">
                Katihar Engineering College , Katihar, Bihar
              </span>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
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
        <div className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-medium rounded-md py-2 hover:bg-zinc-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-zinc-500 text-sm text-center mt-16 border-t border-zinc-800 pt-6 w-full max-w-6xl">
        © 2025 General Coding Club, KEC. Built with 💻 by the GCC Web Team.
      </footer>
    </main>
  );
}
