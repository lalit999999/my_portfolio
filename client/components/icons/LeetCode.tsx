import React from "react";

export function LeetCodeIcon({ className }: { className?: string }) {
  // Stylized LeetCode-like glyph (not trademarked asset) with two-tone gradient
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="lcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFA116" />
          <stop offset="100%" stopColor="#FFCB66" />
        </linearGradient>
      </defs>
      {/* left angled linkage */}
      <path
        d="M9 3a1 1 0 0 0-1.7-.7L3.2 6.64a4 4 0 0 0 0 5.66l4.1 4.1a1 1 0 1 0 1.4-1.42l-4.1-4.1a2 2 0 0 1 0-2.83l4.1-4.1A1 1 0 0 0 9 3Z"
        fill="url(#lcGrad)"
      />
      {/* hook / bracket to the right */}
      <path
        d="M13.5 6.5a1 1 0 1 0 0 2h2.75a3.75 3.75 0 1 1 0 7.5H13.5a1 1 0 1 0 0 2h2.75a5.75 5.75 0 1 0 0-11.5H13.5Z"
        fill="currentColor"
      />
      {/* node */}
      <circle cx="12.25" cy="12" r="1.25" fill="currentColor" />
    </svg>
  );
}
