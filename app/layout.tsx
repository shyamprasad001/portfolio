import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Clash Display is loaded via Fontshare in globals.css (not on Google Fonts),
// referenced here through the --font-clash CSS variable declared there.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shyam Prasad Mantri — Full Stack Developer",
  description:
    "Full Stack Developer (MERN, Spring Boot, DevOps) building resilient systems and interfaces with intent. Based in India.",
  openGraph: {
    title: "Shyam Prasad Mantri — Full Stack Developer",
    description:
      "Full Stack Developer (MERN, Spring Boot, DevOps) building resilient systems and interfaces with intent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-ink text-bone font-body antialiased selection:bg-ion selection:text-ink">
        {children}
      </body>
    </html>
  );
}
