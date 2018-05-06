# reactup

React project setup script, using:

- `create-react-app`
- ESLint
- Cypress end-to-end and component testing
- Git repo initialized

## Usage

Add `reactup/bin` to your `PATH`.

```
# reactup my-new-app-name
```

## Manual Configuration

The following steps are not yet automated, and need to be done after running the script:

- Add the following `package.json` script: `"cypress": "cypress open",`
- Run `yarn cypress` and it will generate default test files for you

## License

MIT
