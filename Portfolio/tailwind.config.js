/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'Monaco', '"Andale Mono"', '"Ubuntu Mono"', 'monospace'],
            },
            colors: {
                sys: {
                    black: '#050505',   // Deep background
                    dark: '#0a0a0a',    // Component background
                    surface: '#111111', // Hover/Card surface
                    border: '#262626',  // Subtle border
                },
                console: {
                    text: '#ededed',    // Primary text
                    dim: '#a1a1a1',     // Secondary text
                    muted: '#525252',   // Tertiary text
                    accent: '#3b82f6',  // Core Blue (System)
                    success: '#10b981', // Green (Status)
                    warn: '#f59e0b',    // Orange (Warning)
                }
            },
            maxWidth: {
                'terminal': '1000px',
            },
            animation: {
                'cursor-blink': 'blink 1s step-start infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
