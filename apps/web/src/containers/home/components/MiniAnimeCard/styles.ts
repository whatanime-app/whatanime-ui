import { Button as WAButton, Container as WAContainer, styled } from '@whatanime/design-system';

export const Container = styled(WAContainer, {
  height: 250,
  position: 'relative',
  minWidth: 148,

  '@media (min-width: 768px)': {
    minWidth: 224,
  },
});

export const Button = styled(WAButton, {
  position: 'absolute',
  bottom: 0,
  width: '100%',

  borderRadius: 'inherit',
});

export const Span = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
});
