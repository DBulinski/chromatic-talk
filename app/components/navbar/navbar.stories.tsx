import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";
import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Desktop: Story = {
  render: () => <Navbar />,
};

export const Mobile: Story = {
  render: () => <Navbar />,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvas }) => {
    const toggleMenuButton = canvas.getByRole("button", {
      name: "Toggle Menu",
    });
    await userEvent.click(toggleMenuButton);
  },
};
