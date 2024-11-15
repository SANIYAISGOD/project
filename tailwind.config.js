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
		  background: '#fefdf5', // General background color
		  primary: '#334155', // Dark blue for headings
		  secondary: '#64748b', // Gray for subheadings
		  accent: '#e6f7f0', // Light green for icons
		  buttonPrimary: '#4f46e5', // Button color
  
		  // Variable-based color system for further customization
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  business: '#fefdf5', // Light background color for business section
		  trusted: '#e6f7f0', // Background color for "trusted by" section
		  feature1: '#FBDEE5', // Light pink for first feature card
		  feature2: '#CCEFF6', // Light blue for second feature card
		  feature3: '#F9EB71', // Light yellow for third feature card
		},
		borderRadius: {
		  lg: '1.5rem', // General rounded corners
		  featureCard: '1rem', // Rounded corners for feature cards
		  trustedCard: '0.75rem', // Rounded corners for trusted section cards
		  md: 'calc(var(--radius) - 2px)', // Medium radius for general use
		  sm: 'calc(var(--radius) - 4px)', // Small radius for minor UI elements
		},
		spacing: {
		  18: '4.5rem', // Extra spacing utility
		  'business-padding': '3rem 8rem', // Padding for business section
		  'feature-padding': '2rem 4rem', // Padding for feature cards
		  'trusted-padding': '3rem', // Padding for trusted section
		},
		fontFamily: {
		  body: ['Arial', 'Helvetica', 'sans-serif'], // Body font
		  feature: ['Geist Sans', 'Arial', 'sans-serif'], // Font for feature section
		},
		screens: {
		  xs: '480px', // Extra small screens
		  sm: '640px', // Small screens
		  md: '768px', // Medium screens
		  lg: '1024px', // Large screens
		  xl: '1280px', // Extra large screens
		  '2xl': '1536px', // 2X Large screens
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"), // Adding animations plugin
	],
  };
  
  