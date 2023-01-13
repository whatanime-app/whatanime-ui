# [WhatAnime](https://www.whatanime.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) ![npm version](https://img.shields.io/badge/node-v16.18.1-blue)

Monorepo official WhatAnime

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Storybook](https://storybook.js.org/) app
- `web`: a [Next.js](https://nextjs.org/) app
- `design-system`: a React component library
- `design-tokens`: a Tokens library
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Installation

It is recommended that you have nvm installed to use the version configured in the .nvmrc file.

NVM : https://github.com/nvm-sh/nvm

```
cd whatanime-ui
nvm use
npm install
npm i
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Links:

Site: https://www.whatanime.org  
Storybook: https://storybook.whatanime.org  
Design System: https://www.npmjs.com/package/@whatanime/design-system  
Design Tokens: https://www.npmjs.com/package/@whatanime/design-tokens  

