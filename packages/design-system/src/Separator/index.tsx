import type { ComponentProps } from 'react';

import { styled } from '../stitches';

import * as Separator from '@radix-ui/react-separator';

export const SeparatorDemo = styled(Separator.Root, {
  backgroundColor: '$gray300',

  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: '100%',
      },
      vertical: {
        height: '100vh',
        width: '1px',
      },
    },
  },
});

export interface SeparatorProps extends ComponentProps<typeof SeparatorDemo> {}

SeparatorDemo.displayName = 'SeparatorDemo';
