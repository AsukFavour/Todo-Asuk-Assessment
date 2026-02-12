## Todo App – Frontend Mentor Challenge

This is a solution to the [Todo app](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) challenge, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

### Features

- Add, complete, delete todos
- Filter by **All / Active / Completed**
- Clear all completed todos
- Drag-and-drop reordering (using `@hello-pangea/dnd`)
- Light / dark mode toggle with persistence
- Todos persisted in `localStorage`
- Responsive layout matching the provided designs

### Tech & architecture

- **Vite + React + TS** scaffold
- **Tailwind CSS** for styling (`darkMode: 'class'`)
- `useTodos` hook encapsulates todo state, actions, persistence, and derived counts
- `useTheme` hook manages theme + `<html class="dark">`
- Components split into `layout` and `todo` subfolders for clarity

## Project Structure

High-level layout of the todo app built with React, TypeScript, Vite, and Tailwind CSS, matching the provided dark-gradient UI for mobile and desktop.

```text
.
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── STRUCTURE.md   
├── public
│   └── images
│       ├── bg-desktop-dark.jpg
│       ├── bg-desktop-light.jpg
│       ├── bg-mobile-dark.jpg
│       └── bg-mobile-light.jpg
└── src
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── App.css 
    ├── types
    │   └── todo.ts
    ├── hooks
    │   ├── useLocalStorage.ts
    │   ├── useTheme.ts
    │   └── useTodos.ts
    └── components
        ├── layout
        │   ├── Header.tsx
        │   └── ThemeToggle.tsx
        └── todo
            ├── TodoInput.tsx
            ├── TodoList.tsx
            ├── TodoItem.tsx
            ├── TodoFilters.tsx
            └── TodoFooter.tsx
```

### File responsibilities

- **index.html**: Root HTML file with `#root` mount point and main script.
- **vite.config.ts**: Vite configuration with React plugin.
- **tailwind.config.js / postcss.config.js**: Tailwind CSS and PostCSS setup.
- **tsconfig\*.json**: TypeScript configuration for app and tooling.
- **README.md**: Challenge description, setup, and implementation notes.
- **STRUCTURE.md**: This overview of project layout and responsibilities.

#### `public/images/`

- **bg-desktop-dark.jpg / bg-desktop-light.jpg**: Desktop hero background images used for the top half of the screen.
- **bg-mobile-dark.jpg / bg-mobile-light.jpg**: Mobile hero background images used for the top half of the screen.

#### `src/`

- **main.tsx**: Bootstraps React, renders `App`, imports global styles.
- **App.tsx**: Top-level UI and state wiring (theme, todos, filters, drag-and-drop), and overall layout to center the two dark cards (input + list) under the hero image like in the design.
- **index.css**: Tailwind directives and minimal global styling (dark page background, font, drag-and-drop hint text styles).
- **types/todo.ts**: Shared `Todo` and `Filter` TypeScript types.

#### `src/hooks/`

- **useLocalStorage.ts**: Generic hook for localStorage-backed state.
- **useTheme.ts**: Light/dark mode hook with localStorage & `document.documentElement` class.
- **useTodos.ts**: Encapsulates todo list state, actions, persistence, and derived counts.

#### `src/components/layout/`

- **Header.tsx**: Full-width hero section with the purple gradient image background, `TODO` title on the left, sun/moon icon on the right, and a slot where the dark input card sits overlapping the bottom edge .
- **ThemeToggle.tsx**: Icon button to switch between light and dark modes, visually matching the small sun icon in the top-right of the design.

#### `src/components/todo/`

- **TodoInput.tsx**: Dark rectangular input card with rounded corners and placeholder “Create a new todo…”, aligned horizontally with the left circle .
- **TodoList.tsx**: Dark rectangular list card under the input card; renders todos with drag-and-drop behavior and correct padding to match the design on both mobile and desktop.
- **TodoItem.tsx**: Single todo row (circle/checked state on the left, text in the center, `X` delete on the right) styled to match the typography and spacing from the images.
- **TodoFilters.tsx**: Filter controls (`All`, `Active`, `Completed`) rendered both inside the list footer for desktop and in a separate bar beneath the list on mobile, as shown in the designs.
- **TodoFooter.tsx**: Bottom section inside the list card with “X items left”, inline filters (desktop), “Clear Completed”, and matches the dark, subtle text styling .

### Getting started
To run locally 
-npm i / npm install
-npm run dev