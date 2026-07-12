import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",         // primary background — absolute void
        surface: "#131313",     // elevated panels / cards
        surface2: "#1B1B1B",    // hover / active panel state
        line: "#262626",        // hairline borders
        ion: "#4DFAFF",         // Ion Cyan — the single luminous accent
        "ion-dim": "#1E5457",   // muted cyan for backgrounds/glows
        bone: "#F5F5F3",        // primary text (warm white)
        mist: "#9A9A9E",        // secondary / muted text
        graphite: "#5A5A5E",    // tertiary text, captions
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-mobile": ["clamp(2.75rem, 12vw, 4.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "hero": ["clamp(4.5rem, 9vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "section": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        "ion-glow": "0 0 40px -8px rgba(77,250,255,0.45)",
        "ion-glow-lg": "0 0 90px -10px rgba(77,250,255,0.55)",
        "ion-glow-sm": "0 0 20px -4px rgba(77,250,255,0.35)",
      },
      backgroundImage: {
        "grain": "url('/noise.png')",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "blink": "blink 1.1s steps(1) infinite",
        "float": "float 10s ease-in-out infinite",
        "float-slow": "float-slow 15s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-24px) scale(1.04)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-16px) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
