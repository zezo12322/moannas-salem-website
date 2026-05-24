"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/issues", label: "قضايانا" },
  { href: "/guide", label: "دليل الحقوق" },
  { href: "/campaigns", label: "حملاتنا" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF5EF]/95 backdrop-blur-sm border-b border-[#DDD3CC]">
        <nav
          className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between"
          aria-label="القائمة الرئيسية"
        >
          {/* Logo — right in RTL (flex-row default in RTL = right first) */}
          <Link
            href="/"
            className="text-[#4B245E] font-bold text-xl leading-none font-[family-name:var(--font-arabic)]"
            aria-label="مؤنث سالم — الصفحة الرئيسية"
          >
            مؤنث سالم
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#211A22] hover:text-[#4B245E] text-[15px] font-medium transition-colors duration-[150ms]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/support"
              className="inline-flex items-center gap-1 bg-[#4B245E] text-white text-[15px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors duration-[150ms]"
            >
              اطلبي دعمًا آمنًا
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#211A22]"
            onClick={() => setOpen(true)}
            aria-label="افتحي القائمة"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer — slides from right (RTL = from the start side) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="القائمة"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#FAF5EF] shadow-lg flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDD3CC]">
          <Link
            href="/"
            className="text-[#4B245E] font-bold text-xl"
            onClick={() => setOpen(false)}
          >
            مؤنث سالم
          </Link>
          <button
            className="text-[#211A22] p-1"
            onClick={() => setOpen(false)}
            aria-label="أغلقي القائمة"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <ul className="flex flex-col list-none m-0 p-0 flex-1 px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-[#211A22] hover:text-[#4B245E] text-lg font-medium border-b border-[#DDD3CC]/50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Drawer CTA */}
        <div className="px-6 py-6">
          <Link
            href="/support"
            className="flex items-center justify-center gap-1 w-full bg-[#4B245E] text-white text-base font-semibold px-5 py-3 rounded-full hover:bg-[#3A1A4A] transition-colors"
            onClick={() => setOpen(false)}
          >
            اطلبي دعمًا آمنًا
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF5EF] border-t border-[#DDD3CC] px-4 py-3">
        <Link
          href="/support"
          className="flex items-center justify-center gap-1 w-full bg-[#4B245E] text-white text-base font-semibold py-3 rounded-full hover:bg-[#3A1A4A] transition-colors"
        >
          اطلبي دعمًا آمنًا
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </>
  );
}
