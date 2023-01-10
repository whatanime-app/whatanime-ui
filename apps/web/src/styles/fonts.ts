import { Nova_Mono as NovaMono, Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const novaMono = NovaMono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
});
