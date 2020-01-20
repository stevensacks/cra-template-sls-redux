# Create React App Template

Run this command to use this template:
```
npx create-react-app your-project --template sls
```

This is a Create React App bootstrapped with my preferred setup of ESLint, Prettier, and a bunch of libraries common to most projects, such as lodash, date-fns, core-js, validator, etc.

It comes with cypress.json and jsconfig.json that sets the src folder as the root url for React and Cypress.

## Setup

After installing this template with CRA, do the following:
 
Cut and paste the contents of `pkg.json` into your package.json. The husky, lint-staged, and jest configurations are not currently supported by templates. Also, the CRA team doesn't like separating dev dependencies, but I do, so you need these, as well. You can delete the `pkg.json` file after you're finished.
 
Run `yarn upd`. This will make sure that all of the libraries are updated to the latest versions.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>

#### `yarn cypress`

Launches the Cypress test runner.

#### `yarn upd`

Update all packages to the latest versions and launches the development server.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn test-cov`

Launches the test runner and also generates a code coverage report.

#### `yarn test-cov-view`

Requires browser-sync to be install globally. Watches the code coverage folder and automatically refreshes the browser when it changes.
