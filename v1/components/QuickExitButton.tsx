"use client";

export default function QuickExitButton() {
  const handleExit = () => {
    // Replace current history entry so back-button won't return here
    window.location.replace("https://www.google.com");
  };

  return (
    <button
      onClick={handleExit}
      className="fixed top-20 start-4 z-50 flex items-center gap-1.5 bg-[#211A22] text-white text-[13px] font-semibold px-3 py-2 rounded-full shadow-lg hover:bg-[#3A1A4A] transition-colors duration-[150ms] focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label="خروج سريع من الموقع"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      خروج سريع
    </button>
  );
}
