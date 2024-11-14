/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], 
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  business: '#fefdf5', 
		  trusted: '#e6f7f0', 
		},
		
		
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		  'feature-card': '1rem', 
		  'trusted-card': '0.5rem', 
		},
		
		
		spacing: {
		  'business-padding': '3rem 8rem', 
		  'feature-padding': '2rem 4rem', 
		  'trusted-padding': '3rem', 
		},
  
		
		fontFamily: {
		  body: ['Arial', 'Helvetica', 'sans-serif'], 
		  feature: ['Geist Sans', 'Arial', 'sans-serif'], 
		},
  
		
		screens: {
		  xs: '480px',
		  sm: '640px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1280px',
		  '2xl': '1536px',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"), 
	],
  };
  