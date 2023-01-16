import { styled, Text } from '@whatanime/design-system';

export const Container = styled('section', {
  mx: 'auto',
  py: '$8',
  gap: '$8',
  display: 'flex',
  justifyContent: 'space-between',
});

export const Content = styled('article', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

export const Heading = styled(Text, {
  fontWeight: '$regular',
});

export const Box = styled('div', {
  width: '100%',
});

export const Flex = styled('div', {
  width: '100%',
  display: 'flex',
});
