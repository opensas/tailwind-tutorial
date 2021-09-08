const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
    fontSize: {
      'h600': ['36px', '150%'],
      'h500': ['24px', '150%'],
      'h400': ['18px', '150%'],
      'h300': ['16px', '150%'],
      'h200': ['14px', '150%'],
      'h100': ['12px', '150%'],
    },
		extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'neutral-900': '#1A1A1A',
        'neutral-600': '#767676',
        'neutral-400': '#A9A9A9',
        'neutral-300': '#E8E8E8',
        'neutral-200': '#F3F3F3',
        'neutral-100': '#FAFAFA',
        'blue': { 'DEFAULT': '#0449C8' },
        'white': { 'DEFAULT': '#FFFFFF' },
        'red': { 'DEFAULT': '#B82E26' },
      }
    },
	},
	plugins: [],
};

module.exports = config;
