export const JIKAN_URL = 'https://api.jikan.moe/v4';
export const ANIMECHAN_URL = 'https://animechan.vercel.app/api';

export function isDevEnvironment() {
  return process.env.NODE_ENV === 'development';
}

export async function axeAccessibilityReporter() {
  if (isDevEnvironment()) {
    const axe = await require('@axe-core/react');
    const React = await require('react');
    const ReactDom = require('react-dom');

    axe(React, ReactDom, 1000);
  }
}
