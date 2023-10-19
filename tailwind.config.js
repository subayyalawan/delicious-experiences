/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "31_": "31%",
        "45_": "45%",
      },
      height: {
        "663_": "663px",
      },
      fontFamily:{
        "Freight-semibold" : "Freight-semibold",
        "Freight-medium" : "Freight-medium",
        "Freight-light" : "Freight-light",
        "Freight-bold" : "Freight-bold",
        "Freight-book" : "Freight-book",
      },
      colors: {
        'contact-yellow': 'rgba(250,247,238)',
        'blog-area' : 'rgba(244,244,244)',
        'footer-text-grey' : '#4a4a4a',
        'footer-terms-grey' : '#b2b2b2',
        'mobile-nav' : '#f4f4f4',
      },
      minHeight: {
        '380_': '380px',
      },
      spacing: {
        '73px': '73px',
      },
      backgroundSize:{
        '40%_': '40%',
      }
    },
  },
  plugins: [],
};
