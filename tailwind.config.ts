import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#006c49',
        'primary-container': '#10b981',
        'primary-fixed': '#6ffbbe',
        'primary-fixed-dim': '#4edea3',
        'on-primary': '#ffffff',
        'on-primary-container': '#00422b',
        'on-primary-fixed': '#002113',
        'on-primary-fixed-variant': '#005236',
        
        'secondary': '#565e74',
        'secondary-container': '#dae2fd',
        'secondary-fixed': '#dae2fd',
        'secondary-fixed-dim': '#bec6e0',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5c647a',
        'on-secondary-fixed': '#131b2e',
        'on-secondary-fixed-variant': '#3f465c',
        
        'tertiary': '#795900',
        'tertiary-container': '#ce9a00',
        'tertiary-fixed': '#ffdf9f',
        'tertiary-fixed-dim': '#f9bd22',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#4a3500',
        'on-tertiary-fixed': '#261a00',
        'on-tertiary-fixed-variant': '#5c4300',
        
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        
        'background': '#f4fbf4',
        'on-background': '#161d19',
        'surface': '#f4fbf4',
        'surface-dim': '#d4dcd5',
        'surface-bright': '#f4fbf4',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eef6ee',
        'surface-container': '#e8f0e9',
        'surface-container-high': '#e3eae3',
        'surface-container-highest': '#dde4dd',
        'on-surface': '#161d19',
        'surface-variant': '#dde4dd',
        'on-surface-variant': '#3c4a42',
        
        'outline': '#6c7a71',
        'outline-variant': '#bbcabf',
        'inverse-surface': '#2b322d',
        'inverse-on-surface': '#ebf3eb',
        'inverse-primary': '#4edea3',
        'surface-tint': '#006c49',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
      boxShadow: {
        'editorial': '0 20px 40px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
