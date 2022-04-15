import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* ----------
    SPACING VARIABLES
    ---------- */
    --base: 8px;
    --spacing-0: calc(var(--base) * 1);
    --spacing-1: calc(var(--base) * 2);
    --spacing-2: calc(var(--base) * 3);
    --spacing-3: calc(var(--base) * 4);
    --spacing-4: calc(var(--base) * 5);
    --spacing-5: calc(var(--base) * 6);
    --spacing-6: calc(var(--base) * 7);
    --spacing-7: calc(var(--base) * 8);
    --spacing-8: calc(var(--base) * 9);
    --spacing-9: calc(var(--base) * 10);
    --spacing-10: calc(var(--base) * 11);
    --spacing-11: calc(var(--base) * 12);
    --spacing-12: calc(var(--base) * 13);
    /* ----------
    COLOR PALETTE
    ---------- */
    --color-text: hsl(183deg, 18%, 25%);//#252525
    --color-text-tint: hsl(183deg, 18%, 40%);
    --color-text-shade: hsl(183deg, 18%, 15%);
    --color-text-transparent: hsl(183deg, 28%, 88%);//#D8E8E9 color based on color text at 0.1 alpha
    --color-text-transparent-2: hsl(183deg, 21%, 85%);//#D0DFE0 color based on color text at 0.15 alpha
    --color-text-transparent-3: hsl(184deg, 18%, 81%);//#C6D6D7 color based on color text at 0.2 alpha
    --color-background: hsl(183deg, 58%, 95%);//#ebf9fa
    --color-background-alt: hsl(213deg, 50%, 89%);
    --color-background-io: hsl(0deg, 0%, 97%);
    --color-primary: hsl(213deg, 100%, 43%);
    --color-primary-muted: hsl(213deg, 66%, 63%);
    --color-primary-shade: hsl(213deg, 100%, 23%);
    --color-secondary: hsl(3deg, 100%, 43%);
    --color-secondary-muted: hsl(3deg, 66%, 79%);
    --color-secondary-darkened: hsl(3deg, 100%, 30%);
    /* ----------
    BASE TYPOGRAPHY RULES
    ---------- */
    --font-weight-black: 900;
    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;
    --font-family-primary: "Rubik", "Asap", "DejaVu Sans", "Verdana", "sans‑serif";
    --font-family-secondary: "Open Sans", "Segoe UI", "Apple SD Gothic Neo", "Lucida Grande", "Lucida Sans Unicode", "sans‑serif";
    --font-family-code: "Source Code Pro", "Fira Mono", "monospace";
    /* ----------
    RESPONSIVE MARGIN FOR INDEX/404/BLOG/CONTACT
    ---------- */
    --margin-top-min: var(--spacing-1);
    --margin-top-max: 120px;
    --margin-top-value: 4px + 7.83vw;
    --responsive-top-spacing-0: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));
    --responsive-top-spacing-1: calc(var(--responsive-top-spacing-0) / 2);
    --responsive-top-spacing-2: calc(var(--responsive-top-spacing-0) / 3);
    --responsive-top-spacing-3: calc(var(--responsive-top-spacing-0) / 4);
  }
  /* ----------
    CSS RESET
  ---------- */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: var(--color-background);
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
