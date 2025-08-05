"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar animations
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Navbar glow animation
      gsap.to(".navbar-glow", {
        boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.3)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      // Navbar logo pulse
      gsap.to(".navbar-logo", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-[90%] max-w-[90vw] md:max-w-fit"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-8">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
          <Link href="/">Light Webx</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/#about"
            className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/#products"
            className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Products
          </Link>
          <Link
            href="/careers"
            className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Careers
          </Link>
        </div>
      </div>
    </nav>
  );
}
