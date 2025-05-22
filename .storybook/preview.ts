import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "light",
      list: [
        { name: "light", class: "light", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#000000" },
      ],
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
