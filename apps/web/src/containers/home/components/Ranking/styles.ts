import { Container as WAContainer, styled } from '@whatanime/design-system';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  textDecoration: 'none',
  color: '$white',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const Container = styled(WAContainer, {
  borderRadius: '$md',
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
});

export const Heading = styled('header', {
  h2: { color: '$black' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  width: '100%',
  minHeight: '40px',

  backgroundColor: '$yellow300',
  borderTopLeftRadius: 'inherit',
  borderTopRightRadius: 'inherit',
});

export const Box = styled('div', {
  px: '$8',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
});

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$4',
  height: '90%',
  my: 'auto',
});

export const ListItem = styled('li', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
});
