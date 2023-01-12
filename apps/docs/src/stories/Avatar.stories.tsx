import type { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@whatanime/design-system';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diogorochaa.png',
    alt: 'Diogo Rocha',
    fallback: '',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    fallback: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
    fallback: 'DR',
  },
};
