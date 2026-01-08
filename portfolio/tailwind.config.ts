import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Added for user's structure
    ],
    darkMode: "class", // Important for next-themes
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--accent)", // Mapping primary to orange accent
                "primary-hover": "var(--accent-hover)",
                border: "var(--border)",
                secondary: "var(--card-bg)", // Mapping secondary to card-bg
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                merriweather: ["var(--font-merriweather)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
