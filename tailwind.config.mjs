import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#121212',
        primary: {
          '50': '#e7fff8',
          '100': '#c6ffeb',
          '200': '#92ffde',
          '300': '#4dffd2',
          '400': '#00ffbf',
          '500': '#00e8ab',
          '600': '#00be8e',
          '700': '#009876',
          '800': '#00785f',
          '900': '#00624f',
          '950': '#00382e'
        }
      },
      fontFamily: {
        merienda: ['"Merienda Variable"', 'cursive', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
