import { Container as WAContainer, styled, Text as WAText } from '@whatanime/design-system';
import Image from 'next/image';

export const Container = styled(WAContainer, {
  display: 'flex',
  width: '100%',
  height: 250,
});

export const Content = styled('div', {
  width: '100%',
  padding: '$3',
});

export const Box = styled('div', {
  width: 220,
  borderRadius: 'inherit',
  overflow: 'hidden',
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

export const Text = styled(WAText, {
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
