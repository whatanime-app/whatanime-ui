import type { ComponentProps, ElementType } from 'react';

import { styled } from '../stitches';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$black',
        background: '$yellow300',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$gray400',
        },

        '&:disabled': {
          color: '$white',
          background: '$gray400',
        },
      },

      secondary: {
        color: '$white',
        border: '2px solid $yellow300',

        '&:not(:disabled):hover': {
          background: '$yellow300',
          color: '$black',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 32,
      },

      md: {
        height: 40,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = 'Button';
