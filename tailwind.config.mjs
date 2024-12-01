import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#0d0d0d',
        primary: {
          '50': '#edfff2',
          '100': '#d5ffe4',
          '200': '#aeffc9',
          '300': '#70ffa1',
          '400': '#2bfd71',
          '500': '#00ff55',
          '600': '#00c03b',
          '700': '#009632',
          '800': '#06752c',
          '900': '#076027',
          '950': '#003713'
        }
      },
      fontFamily: {
        merienda: ['"Merienda Variable"', 'cursive', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
