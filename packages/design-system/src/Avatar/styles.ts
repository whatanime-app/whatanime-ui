import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '../stitches';

export const Root = styled(Avatar.Root, {
  width: 64,
  height: 64,

  borderRadius: '$full',
  border: '1px solid $gray600',
});

export const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',

  borderRadius: 'inherit',
});

export const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '$xl',
  fontWeight: '$bold',

  borderRadius: 'inherit',
  backgroundColor: '$yellow300',
});
