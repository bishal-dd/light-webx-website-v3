"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      gsap.to(".navbar-glow", {
        boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.3)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-[90%] max-w-[90vw] md:max-w-fit"
    >
      <div className="flex items-center justify-between gap-4 sm:gap-8">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent whitespace-nowrap navbar-logo">
          <Link href="/">Light Webx</Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center md:hidden space-y-4 bg-gray-800/90 px-6 py-4 rounded-lg shadow-lg">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const linkClass =
    "relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full";

  return (
    <>
      <Link href="/#about" className={linkClass} onClick={onClick}>
        About
      </Link>
      <Link href="/#products" className={linkClass} onClick={onClick}>
        Products
      </Link>
      <Link href="/careers" className={linkClass} onClick={onClick}>
        Careers
      </Link>
    </>
  );
}
