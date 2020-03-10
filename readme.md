
# WIP

Prettier with ESLint, TSLint
https://prettier.io/docs/en/integrating-with-linters.html

Prettier configuration file:
https://prettier.io/docs/en/configuration.html


## Setup Git

- Initiate .gitignore: > touch .gitignore
- Add line to .gitignore: > echo 'node_modules' > .gitignore
- Add line and create file at the seme time: > echo 'node_modules' > .gitignore
// echo appends a newline on the end of the output


## package.json

Initiate package.json: > npm init -y


## Dependencies

Webpack -D
- webpack
- webpack-cli

React (-S)
- react
- react-dom


## Setup TypeScript, loaders

Install TypeScript locally with loaders -D
- typescript
- ts-loader 
- source-map-loader

- ts-loader helps Webpack compile the TypeScript code using the TypeScript’s standard configuration file named tsconfig.json

- source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own sourcemaps. This will allow to debug the final output file as if you were debugging your original TypeScript source code

 React declaration files for TypeScript -D
- @types/react
- @types/react-dom

Compile: 
> tsc fileName.ts
> npx webpack


## Linter

### Setup

- npm install eslint -D
- npx eslint --init
    - Will ask about: JS, TS, React, JSON, etc
    - It will create an .eslintrc.json
    - It will add the following packages on -D:
        + @typescript-eslint/parser@2.22.0
        + eslint-plugin-react@7.19.0
        + eslint@6.8.0
        + eslint-plugin-import@2.20.1
        + @typescript-eslint/eslint-plugin@2.22.0
        + eslint-plugin-standard@4.0.1
        + eslint-config-standard@14.1.0
        + eslint-plugin-promise@4.2.1
        + eslint-plugin-node@11.0.0

- Install the VS Code ESLint plug-in

- VS Code -> settings (ctrl+,) -> search for Eslint -> enable "Always show status", "Eslint: Enable", "Eslint > Format: Enable"

- VS Code -> settigns (ctrl+,) -> search for Eslint validate -> make sure "Typescript > Validate: Enable" and "Javascript > Validate: Enable" are checked. If they are checked, nothing will be displayed in the settings.json. If they are not enabled, there will be key/values for this in settings.json, set to false.

- settings.json (should not be nessessary):
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },


### Functionality

- Console -> Problems
- Console -> Output -> filter: ESLint/Prettier

- Set the market on the exact problem, ctrl+. -> quick fix menu opens, including a "show documentation" option


## Formatter

Prettier -D -E

- npm i -D -E prettier
// We recommend pinning an exact version of prettier in your package.json as we introduce stylistic changes in patch releases
// -E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm’s default semver range operator.


Integration with linter -D

- eslint-config-prettier 
- eslint-plugin-prettier

// Disable formatting rules. eslint-config-prettier is a config that disables rules that conflict with Prettier. Add it to your devDependencies, then extend from it within your .eslintrc configuration. Make sure to put it last in the extends array, so it gets the chance to override other configs.

// Use ESLint to run Prettier. eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier. Add it to your devDependencies, then enable the plugin and rule in .eslintrc.json:

{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}

// Recommended configuration. "plugin:prettier/recommended" exposes a "recommended" configuration that configures both eslint-plugin-prettier and eslint-config-prettier in a single step: 

{
  "extends": ["plugin:prettier/recommended"]
}


## Git hooks




## Deprecated

Tslint (will be deprecated) + Prettier -D 
- prettier
- tslint
- tslint-config-prettier // disables conflicting rules
- tslint-plugin-prettier
- tslint-react // extra configuration for react projects

> tslint -c tslint.json 'src/**/*.{ts,tsx}' 
