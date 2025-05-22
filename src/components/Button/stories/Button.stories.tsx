import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["contained", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    animation: {
      control: "select",
      options: ["none", "slide"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    label: "Contained Button",
    variant: "contained",
    size: "md",
    animation: "none",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Button",
    variant: "outline",
    size: "md",
    animation: "none",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost Button",
    variant: "ghost",
    size: "md",
    animation: "none",
  },
};
