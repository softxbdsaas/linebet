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
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
          muted: `var(--color-black-muted)`,
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
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
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
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
      },
    },
  },
  plugins: [],
};
