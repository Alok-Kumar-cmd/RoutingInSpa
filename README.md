# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Experiment 5 Updates

This project extends Experiment 4 by implementing Redux Toolkit for structured state management.

### Features Implemented
- Implemented Redux Toolkit with `configureStore` and `createSlice`
- Created `favoritesSlice` with actions:
  - addFavorite
  - removeFavorite
  - clearFavorites
- Integrated Redux using `Provider`, `useDispatch`, and `useSelector`
- Added new page **Reports.jsx**
- Used **useMemo** for optimized derived data (total favorites)
- Context API used for global theme management
- Navbar displays live favorites count
- Maintained React Router navigation across all pages

### Pages Included
- Home
- About
- Contact
- Products / Projects
- Analytics
- Reports (Experiment 5 page)

### Technologies Used
- React
- React Router DOM
- Redux Toolkit
- Context API
- Vite

### Screenshots
Screenshots of the application are included in the `/screenshots` folder.