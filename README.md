# reactup

React project setup script, using:

- `create-react-app`
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [React Testing Library](https://testing-library.com/react) component testing
- [Cypress](https://www.cypress.io/) end-to-end testing
- [GitHub Actions](https://www.cypress.io/) for CI, including Cypress screenshots and videos
- [Source Map Explorer](https://github.com/danvk/source-map-explorer) to visualize bundle size
- [react-axe](https://github.com/dequelabs/react-axe) for accessibility auditing

## Usage

Add `reactup/bin` to your `PATH`.

```
# reactup my-new-app-name
```

## Manual Configuration

The following steps are not yet automated, and need to be done after running the script:

- Update the `start`, `build`, and `test` commands with the `EXTEND_ESLINT=true` envvar:

```diff
 "scripts": {
-  "start": "react-scripts start",
-  "build": "react-scripts build",
-  "test": "react-scripts test",
+  "start": "EXTEND_ESLINT=true react-scripts start",
+  "build": "EXTEND_ESLINT=true react-scripts build",
+  "test": "EXTEND_ESLINT=true react-scripts test",
   "eject": "react-scripts eject"
 },
```

- Add the following `package.json` scripts:

```diff
   "test": "EXTEND_ESLINT=true react-scripts test",
+  "cypress": "cypress open",
+  "analyze": "yarn build && source-map-explorer 'build/static/js/*.js'",
   "eject": "react-scripts eject"
 },
```

- Run `yarn cypress` and it will generate default test files for you

## License

MIT
