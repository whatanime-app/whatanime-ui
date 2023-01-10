import { styled, Text } from '@whatanime/design-system';
import Image from 'next/image';

export const Container = styled('div', {
  borderRadius: '$md',
  display: 'flex',
  width: '100%',
  height: 250,
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
});

export const Content = styled('div', {
  width: '100%',
  padding: '$3',
});

export const Box = styled('div', {
  width: 220,
  borderRadius: 'inherit',
  overflow: 'hidden',
  boxShadow: `0 2px 10px $black`,
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Img = styled(Image, {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const StyleText = styled(Text, {
  color: '$white',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 4,
  '-webkit-box-orient': 'vertical',
});

export const Header = styled('header', {
  width: '50%',

  [`> ${Text}`]: {
    fontWeight: 'bold',
    fontSize: '$xl',
  },

  span: {
    fontWeight: 'normal',
    fontSize: '$xl',
  },
});

export const Badge = styled('span', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 90,
  height: 24,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$black',
  backgroundColor: '$yellow300',
});
