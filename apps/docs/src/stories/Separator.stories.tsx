import type { Meta, StoryObj } from '@storybook/react';
import { Container, SeparatorDemo, SeparatorProps, Text } from '@whatanime/design-system';

export default {
  title: 'Form/Separator',
  component: SeparatorDemo,
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
  },
  decorators: [
    (Story) => (
      <Container>
        <Text size="3xl">Separator</Text>
        <Story />
      </Container>
    ),
  ],
} as Meta<SeparatorProps>;

export const Primary: StoryObj<SeparatorProps> = {
  args: {
    orientation: 'horizontal',
  },
};

export const Secondary: StoryObj<SeparatorProps> = {
  args: {
    orientation: 'vertical',
  },
};
