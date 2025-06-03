import { type Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx,js,jsx}',
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1', // Indigo-500, customize as needed
            },
            boxShadow: {
                neumorphic: '4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff',
                'neon-cyan': '0 0 10px cyan',
                'neon-cyan-hover': '0 0 15px cyan',
            },
            backdrop: {
                'blur-md': 'blur(12px)',
            },
        },
    },
    plugins: [
        forms({
            strategy: 'class', // Only apply to classes
        }),
        typography,
        aspectRatio,
    ],
}

export default config