import type { ComponentProps, ElementType } from 'react';

import { styled } from '../stitches';

export const Container = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
});

export interface ContainerProps extends ComponentProps<typeof Container> {
  as?: ElementType;
}

Container.displayName = 'Container';
