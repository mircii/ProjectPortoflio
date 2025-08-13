import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import type { ButtonProps } from "../components/Button";
import "../index.css"

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,        
  argTypes: {
    children: {
      control: "text",
      description: "The text or content inside the button.",
      defaultValue: "Send",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and applies muted styles.",
    },
    className: {
      control: "text",
      description: "Extra Tailwind classes for custom styles.",
    },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Send",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Send",
    disabled: true,
  },
};

export const WithEmoji: Story = {
  args: {
    children: "📨",
    disabled: false,
  },
};

export const Gradient: Story = {
  args: {
    children: "Send",
    disabled: false,
    className: "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90",
  },
};

