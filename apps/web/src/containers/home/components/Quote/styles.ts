import { styled, Text as WAText } from '@whatanime/design-system';

export const Content = styled('div', {
  width: 300,
  height: 180,
  padding: '$4',
  backgroundColor: '$yellow300',
  borderRadius: '$md',
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  py: '$2',
});

export const Text = styled(WAText, {
  height: 80,
  color: '$black',
  fontStyle: 'italic',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
});

export const Character = styled(WAText, {
  color: '$black',
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 1,
  '-webkit-box-orient': 'vertical',
});

export const Title = styled(WAText, {
  color: '$black',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 1,
  '-webkit-box-orient': 'vertical',
});

export const Button = styled('button', {
  backgroundColor: '$gray300',
  border: 'none',
  borderRadius: '$md',
  padding: '$1',
  color: '$black',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$white',
    color: '$yellow300',
  },
});
