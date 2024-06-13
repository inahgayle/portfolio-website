/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './node_modules/preline/preline.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightest-pink': '#FDF8F7',
        'lighter-pink': '#F5E1DE',
        'light-pink': '#EECBC5',
        'primary-pink': '#E7B5AC',
        'dark-pink': '#A27F78',
        'darker-pink': '#745B56',
        'lightest-green': '#F3F5F1',
        'lighter-green': '#CFD9C9',
        'light-green': '#AABCA0',
        'primary-green': '#869F77',
        'dark-green': '#5E6F53',
        'darker-green': '#43503C',
      },
      fontFamily: {
        lilita: ["Lilita One", "serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      keyframes: {
        'wiggle-hello': {
          '0%, 100%':   { transform: 'rotate(-6deg)' },
          '50%':        { transform: 'rotate(6deg)' },
        },
        'rotate-left': {
          '0%':   { transform: 'rotate(12deg)' },
          '100%': { transform: 'rotate(-12deg)' },
        },
        'rotate-right': {
          '0%':   { transform: 'rotate(-6deg)' },
          '100%': { transform: 'rotate(6deg)' },
        },
        'video-games': {
          '0%, 100%':   { transform: 'rotate(-6deg) translateY(-20px)' },
          '50%':        { transform: 'rotate(-3deg) translateY(-8px) scale(1.15)' },
        },
        'video-games-wiggle': {
          '0%, 100%':   { transform: 'rotate(-6deg) translateY(-20px)' },
          '50%':        { transform: 'rotate(-16deg) translateY(-20px)' },
        },
        'kalimba': {
          '0%, 100%':   { transform: 'rotate(-20deg) translateX(10px)' },
          '50%':        { transform: 'rotate(-10deg) translate(5px, -5px) scale(1.15)' },
        },
        'kalimba-wiggle': {
          '0%, 100%':   { transform: 'rotate(-20deg) translateX(10px)' },
          '50%':        { transform: 'rotate(-10deg) translateX(10px)' },
        },
        'crochet': {
          '0%, 100%':   { transform: 'translateX(-5px)' },
          '50%':        { transform: 'rotate(-3deg) translate(-10px, -12px) scale(1.15)' },
        },
        'crochet-wiggle': {
          '0%, 100%':   { transform: 'translateX(-5px)' },
          '50%':        { transform: 'rotate(-10deg) translateX(-5px)' },
        },
        'graphic-design': {
          '0%, 100%':   { transform: 'rotate(12deg) translateY(-20px)' },
          '50%':        { transform: 'rotate(6deg) translate(-5px, -10px) scale(1.15)' },
        },
        'graphic-design-wiggle': {
          '0%, 100%':   { transform: 'rotate(12deg) translateY(-20px)' },
          '50%':        { transform: 'rotate(2deg) translateY(-20px)' },
        },
        'click-mp': {
          '0%, 100%':   { transform: 'rotate(6deg) translate(-80px, -90px)' },
          '50%':        { transform: 'rotate(-6deg) translate(-75px, -85px) scale(1.15)' },
        },
      },
      animation: {
        'about-hello': 'wiggle-hello 1s ease 1 both',
        'interests-text1': 'rotate-left 1.5s ease 1 both',
        'interests-text2': 'rotate-right 1.5s ease 1 both',
        'interests-vg': 'video-games 1s ease 1 both',
        'interests-vg-wiggle': 'video-games-wiggle 1.5s ease infinite both',
        'interests-kal': 'kalimba 1s ease 1 both',
        'interests-kal-wiggle': 'kalimba-wiggle 1.5s ease infinite both',
        'interests-cr': 'crochet 1s ease 1 both',
        'interests-cr-wiggle': 'crochet-wiggle 1.5s ease infinite both',
        'interests-gd': 'graphic-design 1s ease 1 both',
        'interests-gd-wiggle': 'graphic-design-wiggle 1.5s ease infinite both',
        'interests-clickmp': 'click-mp 1s ease 1 both',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('tailwindcss-animated'),
  ],
}