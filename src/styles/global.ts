import { globalCss } from './stitches';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray50',
    fontFamily: '$default',
    '-webkit-font-smoothing': 'antialiased',
  },
});
