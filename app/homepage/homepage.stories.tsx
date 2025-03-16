import type { Meta, StoryObj } from "@storybook/react";
import { Homepage } from "./homepage";

const meta: Meta<typeof Homepage> = {
  title: "Homepage",
  component: Homepage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Default: Story = {
  render: () => <Homepage />,
};
