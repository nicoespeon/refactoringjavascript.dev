module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        // person1: "url('/assets/testimonials/person1.png')",
        // person2: "url('/assets/testimonials/person2.png')",
        // person3: "url('/assets/testimonials/person3.png')",
        // cta: "url('/assets/cta/bg-cta.png')",
        // "hero-5": "url('/assets/heros/hero5background.svg')",
        // "register-page":
        //   "url('/assets/register-pages/register-background.png');",
        // "3d-mockup": "url('/assets/features/mockupbackground.svg');",
        // "trans-grad": "url('/assets/features/transparentgrad.svg');",
        // cta6: "url('/assets/cta/cta6back.jpg')",
      }),
      cursor: {
        grab: "grabbing",
      },
      fontFamily: {
        "ibm-sans": ["IBM Plex Sans", "sans-serif"],
        "dm-sans": ["DMSans", "sans-serif"],
      },
      colors: {
        // Configuration theme colors
        "slate-light": "#F9F9F9", // theme: slate, background color
        "slate-orange": "#FF5930", // theme: slate, primary orange
        "slate-headline": "#1C202B", // theme: slate, headline color
        "slate-body": "#2C3242", // theme: slate, body text color
        "slate-blue": "rgba(67, 83, 255, 1)", // theme: slate, primary blue
        "feeling-moody-start": "#E1ECF6", // theme: slate, start of gradient
        "feeling-moody-end": "#F0E3E3", // theme: slate, end of gradient
        "slate-border": "rgba(25, 49, 60, 0.1)", // theme: slate, end of the border
      },
      boxShadow: {
        slight: "0px 13px 19px 8px #C8DDE53B",
      },
      fontSize: {
        "desktop-h1": "48px;",
        "desktop-h2": "42px",
        "desktop-subheading": "21px",
        "desktop-h4": "20px",
        "desktop-paragraph": "18px",
        "mobile-h2": "32px",
        "mobile-h1": "38px",
        "mobile-h3": "26px",
      },
      maxWidth: {
        default: "1146px",
      },
      padding: {
        mob: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
