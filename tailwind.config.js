/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // text color  declaration
      textColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        light: {
          base: `var(--color-light-base)`,
          muted: `var(--color-light-muted)`,
        },

        button: {
          base: `var(--color-button-base)`,
        },
        shape: {
          base: `var(--color-shape-base)`,
          muted: `var(--color-shape-muted)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        active: {
          base: `var(--color-active-base)`,
        },
        button: {
          base: `var(--color-button-base)`,
        },
        black: {
          base: `var(--color-black-base)`,
          muted: `var(--color-black-muted)`,
        },
        gray: {
          base: `var(--color-gray-base)`,
        },
        slot_dark: {
          base: `var(--color-slot_dark-base)`,
          muted: `var(--color-slot_dark-muted)`,
        },
        slot_active: {
          base: `var(--color-slot_active-base)`,
        },
      },
      // background color  declaration
      backgroundColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        light: {
          base: `var(--color-light-base)`,
          muted: `var(--color-light-muted)`,
        },
        button: {
          base: `var(--color-button-base)`,
        },
        shape: {
          base: `var(--color-shape-base)`,
          muted: `var(--color-shape-muted)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        active: {
          base: `var(--color-active-base)`,
        },
        button: {
          base: `var(--color-button-base)`,
        },
        black: {
          base: `var(--color-black-base)`,
          muted: `var(--color-black-muted)`,
        },
        gray: {
          base: `var(--color-gray-base)`,
        },
        slot_dark: {
          base: `var(--color-slot_dark-base)`,
          muted: `var(--color-slot_dark-muted)`,
        },
        slot_active: {
          base: `var(--color-slot_active-base)`,
        },
      },
      // border color  declaration
      borderColor: {
        primary: {
          base: `var(--color-primary-base)`,
        },
        light: {
          base: `var(--color-light-base)`,
        },
        info: {
          base: `var(--color-info-base)`,
          muted: `var(--color-info-muted)`,
        },
        shape: {
          base: `var(--color-shape-base)`,
        },
        button: {
          base: `var(--color-button-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        active: {
          base: `var(--color-active-base)`,
        },
        black: {
          base: `var(--color-black-base)`,
          muted: `var(--color-black-muted)`,
        },
        gray: {
          base: `var(--color-gray-base)`,
        },
        slot_dark: {
          base: `var(--color-slot_dark-base)`,
          muted: `var(--color-slot_dark-muted)`,
        },
        slot_active: {
          base: `var(--color-slot_active-base)`,
        },
      },
      //  gradient colors
      backgroundImage: {
        "bonus-card-gradient":
          "linear-gradient(117deg, #B389C9 1.61%, #8E4FAE 99.53%)",
      },
      content: {
        'space': '""', // This sets content for pseudo-elements
      },
    },
  },
  plugins: [],
};
