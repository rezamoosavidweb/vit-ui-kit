import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Basic/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    children: 'secondary',
  },
};
