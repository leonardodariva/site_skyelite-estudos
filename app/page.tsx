"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = ["Start", "Story", "Rates", "Benefits", "FAQ"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/5 to-slate-900/10"
        />

        <div className="relative flex h-full flex-col">
          <header className="relative z-30 mx-auto w-full max-w-7xl px-8 py-6">
            <nav aria-label="Primary navigation" className="flex items-center justify-between">
              <a
                className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors hover:text-gray-700"
                href="#start"
              >
                SkyElite
              </a>

              <div className="hidden items-center gap-8 md:flex">
                {navigation.map((item) => (
                  <a
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                    href={`#${item.toLowerCase()}`}
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/45 text-gray-900 backdrop-blur-sm transition-colors hover:bg-white/70 md:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                type="button"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </nav>

            {isMenuOpen && (
              <div className="absolute top-[76px] right-6 left-6 overflow-hidden rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur md:hidden">
                {navigation.map((item) => (
                  <a
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </header>

          <div className="flex flex-1 items-center justify-center px-6" id="start">
            <div className="-mt-28 max-w-5xl text-center sm:-mt-40 md:-mt-80">
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Private Jets
              </p>

              <h1 className="text-6xl leading-none font-normal tracking-tighter md:text-7xl lg:text-8xl">
                <span className="block text-gray-500">Premium.</span>
                <span className="-mt-3 block text-[#202A36]">Accessible.</span>
              </h1>

              <p className="mx-auto mt-7 mb-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <a
                  className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                  href="#story"
                >
                  Discover
                </a>
                <a
                  className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                  href="#rates"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
