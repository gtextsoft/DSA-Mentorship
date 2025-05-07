
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium color palette
				premium: {
					50: '#f0f5ff',
					100: '#e0ebff',
					200: '#c0d8ff',
					300: '#91b9ff',
					400: '#5b91ff',
					500: '#3366ff',
					600: '#1939f7',
					700: '#1428e6',
					800: '#1623bc',
					900: '#192494',
					950: '#111a4f',
				},
				gold: {
					50: '#fbf7ef',
					100: '#f4ebce',
					200: '#eed99a',
					300: '#e5c15e',
					400: '#deaf35',
					500: '#d19a20',
					600: '#b47917',
					700: '#925917',
					800: '#78471a',
					900: '#653b1a',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'subtle-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(209, 154, 32, 0)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(209, 154, 32, 0.3)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-flow': 'gradient-flow 5s ease infinite',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'subtle-bounce': 'subtle-bounce 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(rgba(17, 26, 79, 0.85), rgba(17, 26, 79, 0.95)), url("/hero-bg.jpg")',
				'gold-gradient': 'linear-gradient(45deg, #d19a20, #e5c15e, #d19a20)',
				'premium-gradient': 'linear-gradient(to right, #111a4f, #192494)',
				'testimonial-pattern': 'radial-gradient(circle at bottom right, rgba(229, 193, 94, 0.1), transparent 70%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
