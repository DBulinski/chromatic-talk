import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import "~/app.css";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default preview;
