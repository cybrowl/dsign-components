import "../src/tailwind.css";
import { themes } from "@storybook/theming";

export const parameters = {
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: "#32313D",
      brandImage:
        "https://raw.githubusercontent.com/cybrowl/dsign-components/main/src/lib/assets/dsign_logo.png",
    },
    light: { ...themes.normal, appBg: "white" },
    stylePreview: true,
    current: "dark",
  },
  backgrounds: {
    default: "dsign",
    values: [
      {
        name: "dsign",
        value: "#1B1A22",
      },
      {
        name: "facebook",
        value: "#FFFFFF",
      },
    ],
  },
};
