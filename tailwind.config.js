/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      msm: '505px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#79ae92',
        secondary: '#202d28',
        tertiary: '#001f36',
        quaternary: '#1c5560',
        'black-p': '#0a0c0d',
        'white-p': '#f2f2f2',
        warm: '#fbffcd',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
