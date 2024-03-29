# reactup

Generates a React project using:

- [Create React App](https://create-react-app.dev/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged) for linting staged files upon commit
- [React Testing Library](https://testing-library.com/react) component testing
- [Cypress](https://www.cypress.io/) end-to-end testing
- [GitHub Actions](https://github.com/features/actions) for CI, including Cypress screenshots and videos
- [Source Map Explorer](https://github.com/danvk/source-map-explorer) to visualize bundle size
- [@axe-core/react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md) for accessibility auditing

## Requirements

- [Node](https://nodejs.org/)
- [NPM](https://npmjs.com) >= 7.1
- [Yarn](https://yarnpkg.com/en/docs/install)

## Installation

Clone the repo and add `reactup/bin` to your `PATH`

## Usage

```
# reactup my-new-app-name
```

Read the `README.md` added to the project for details on using that project.

## Manual Configuration

The following steps are not yet automated, and need to be done after running the script:

- Add the following at the end of `package.json`:

```diff
     "source-map-explorer": "^2.4.2"
+  },
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  },
+  "lint-staged": {
+    "*.js": "eslint --max-warnings 0"
   }
 }
```

- Run `yarn cypress` and it will generate default test files for you

## License

Apache-2.0
