import { defineConfig, createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens:{
      fonts: {
        body: { value: "Montserrat, sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.9375rem" },
        sm: { value: "1.25rem" },
        md: { value: "1.5rem" },
        lg: { value: "1.875rem" },
        xl: { value: "2.5rem" },
        "2xl": { value: "3.375rem" }, 
      },
      colors: {
        primary1: { value: "#B92284" },
        primary2: { value: "#112E52" },
        primary3: { value: "#FE7DD1" },
        secondary1: { value: "#22599B" },
        secondary2: { value: "#ECD0E6" },
        accent1: { value: "#171617" },
        accent2: { value: "#FFFFFF" },
      },
      fontWeights: {
        hairline: { value: 100 },
        thin: { value: 200 },
        light: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
        extrabold: { value: 800 },
        black: { value: 900 },
      },
      sizes: {
        max: { value: "max-content" },
        min: { value: "min-content" },
        full: { value: "100%" },
        xs: { value: "20rem" },
        sm: { value: "24rem" },
        md: { value: "28rem" },
        lg: { value: "32rem" },
        xl: { value: "36rem" },
      },
      spacing: {
        px: { value: "0.0625rem" },
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        base: { value: "0.25rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        full: { value: "9999px" },
      },
    },
  },
});

const customTheme = createSystem(config);
export default customTheme