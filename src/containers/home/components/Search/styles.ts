import { styled } from '@/styles/stitches';

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  height: 56,
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray600',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$yellow300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const Input = styled('input', {
  fontFamily: '$default',
  px: '$4',
  fontSize: '$md',
  color: '$black',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export const IconButton = styled('button', {
  width: 64,
  height: '100%',
  paddingLeft: '$2',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$gray200',
  borderLeft: 'inherit',
  borderTop: 'none',
  borderBottom: 'none',
  borderRight: 'none',

  borderTopRightRadius: 'inherit',
  borderBottomRightRadius: 'inherit',

  cursor: 'pointer',

  '&:hover': {
    color: '$yellow300',
  },
});
