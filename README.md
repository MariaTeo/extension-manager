# Extension Manager

## Overview

Your challenge was to build out this browser extension manager UI and get it looking as close to the design as possible. Users should be able to manage their extensions with various functionalities and theme options.

## The Challenge

Users should be able to:
* Toggle extensions between active and inactive states.
* Filter active and inactive extensions.
* Remove extensions from the list.
* Select their color theme (light/dark mode).
* View the optimal layout for the interface depending on their device's screen size.
* See hover and focus states for all interactive elements on the page.

## Links

* **Solution URL:** [Your Frontend Mentor Challenge submission URL here]
* **Live Site URL:** [Your Netlify deployed app URL here]

## My process

### Built with

* (https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
* (https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
* (https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
* (https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
* (https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
* (https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
* (https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
* (https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
* Semantic HTML5 markup
* CSS custom properties
* Flexbox
* Mobile-first workflow

### What I learned

* **Asynchronous data fetching with Supabase:** Implementing `fetchExtensions` to seamlessly load extension data from a Supabase backend.
* **Reactive state management with Vue 3 Composition API:** Utilizing `ref` and `computed` properties for efficient data handling and filtering.
* **Component-based architecture:** Structuring the application with reusable Vue components like `ExtensionItem`, `ConfirmModal`, and `ThemeToggle`.
* **Conditional rendering and dynamic class binding:** Effectively using `v-if`, `v-for`, and `:class` to manage UI based on data and user interactions.
* **Theme switching implementation:** Handling local storage for persistent theme preferences and dynamically applying styles.


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
