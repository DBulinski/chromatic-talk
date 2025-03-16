import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
  render: (args) => <Button {...args} />,
};
