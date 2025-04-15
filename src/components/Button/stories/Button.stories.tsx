import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import '../Button.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    texto: {
      control: 'text',
      description: 'Texto exibido no botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Variante do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado de desabilitado',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    texto: 'Botão Primário',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    texto: 'Botão Secundário',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    texto: 'Botão Outline',
    variant: 'outline',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    texto: 'Botão Pequeno',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    texto: 'Botão Grande',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    texto: 'Botão Desabilitado',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}; 