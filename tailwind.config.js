// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",   // ← ovo je najvažnije!
    "./public/*.html",
    "./public/*.js",
    "./src/**/*.html",      // ← ako još imaš HTML u src
    "./src/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
