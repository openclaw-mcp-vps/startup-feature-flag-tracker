import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feature Flag Tracker — Find & Clean Stale Flags Fast",
  description: "Monitor feature flag usage across your codebase, identify stale flags, and generate cleanup reports with business impact analysis."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ae70ac3-e8a0-4ae0-b21f-9d774a27c322"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
