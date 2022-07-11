/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': 'rgb(18, 29, 51)',
        'lightBlue': 'rgb(12, 108, 242)'
	  },
		screens: {
			'md-620': "621px",
      "md-780": "780px"
		}
    },
  },
  plugins: [],
}
