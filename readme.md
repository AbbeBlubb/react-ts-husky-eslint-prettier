# React+TypeScript project with configuration for ESLint+Prettier and git hooks with Husky+lint-staged



## Sources

TypeScript/React
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

ESLint installation and .eslintrc.json
https://eslint.org/docs/user-guide/getting-started

ESLint configuration
https://eslint.org/docs/user-guide/configuring

ESLint CLI
https://eslint.org/docs/user-guide/command-line-interface

Prettier installation
https://prettier.io/docs/en/install.html

Prettier with ESLint, TSLint
https://prettier.io/docs/en/integrating-with-linters.html

Prettier configuration file:
https://prettier.io/docs/en/configuration.html

Prettier CLI
https://prettier.io/docs/en/cli.html

lint-staged
https://github.com/okonet/lint-staged

husky
https://github.com/typicode/husky



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


## Linter: ESLint

### Setup ESLint & config

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

### .eslintignore

- In addition to any patterns in a .eslintignore file, ESLint always ignores files in /node_modules/* and /bower_components/*.
- It's possible to use an alternate file to the .eslintignore using console command

### Setup VS Code

- Install the VS Code ESLint plug-in
- VS Code -> settings (ctrl+,) -> search for Eslint -> enable "Always show status", "Eslint: Enable", "Eslint > Format: Enable"
- VS Code -> settigns (ctrl+,) -> search for Eslint validate -> make sure "Typescript > Validate: Enable" and "Javascript > Validate: Enable" are checked. If they are checked, nothing will be displayed in the settings.json. If they are not enabled, there will be key/values for this in settings.json, set to false.
- settings.json (should not be nessessary):
```
   "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
```


### Functionality in console & editor

- Console -> Problems
- Console -> Output -> filter: ESLint/Prettier
- Set the market on the exact problem, ctrl+. -> quick fix menu opens, including a "show documentation" option

### package.json scrips

- See the ESLint docs for CLI
- Run ESLint from npm script:

```
  "scripts": {
    "lint:test": "eslint src/**/*.{ts,tsx,js}",
    // Gives the errors in the console for the src folder
    "lint:format": "eslint --fix src/**/*.{ts,tsx,js}",
    // Automatically fixes as many issues as possible. The remaining unfixed issues are outputted in the terminal

    "format": "prettier -c ./.prettierrc --write src/**/*.{ts,tsx,less}",
    "test:format": "tslint -c ./tslint.json src/**/*.{ts,tsx}"
  },
  ```

## Formatter: Prettier

Prettier -D -E

- npm i -D -E prettier
- We recommend pinning an exact version of prettier in your package.json as we introduce stylistic changes in patch releases
- -E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm’s default semver range operator.

Or global:
- npm i -g prettier
- Prettier in CLI: Don't forget the quotes around the globs! The quotes make sure that Prettier expands the globs rather than your shell, for cross-platform usage. The glob syntax from the glob module is used.


Integration with ESLint -D

- eslint-config-prettier 
- eslint-plugin-prettier
- Disable formatting rules: eslint-config-prettier is a config that disables rules that conflict with Prettier. Add it to your devDependencies, then extend from it within your .eslintrc configuration. Make sure to put it last in the extends array, so it gets the chance to override other configs.
- Use ESLint to run Prettier: eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier. Add it to your devDependencies, then enable the plugin and rule in .eslintrc.json:

```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
- Recommended configuration. "plugin:prettier/recommended" exposes a "recommended" configuration that configures both eslint-plugin-prettier and eslint-config-prettier in a single step: 

```
{
  "extends": ["plugin:prettier/recommended"]
}
```


## Git hooks with Husky and lint-staged

### Dependencies

- D
- husky
- lint-staged
- Husky uses git hooks
- lint-staged lets you run a linter against staged git files, that is, only files that have been changed since tha last commit. In comparision to run the linter against all files.

### lint-staged configuration

- Can be configured in package.json
- Configuration should be an object where each value is a command to run and it's key is a glob pattern to use for this command

### Husky configuration

- package.json
- Husky is not really needed to use lint-staged specifically

### Test it

- My lint-staged runs Prettier, not ESLint
- "git add" is not needed as a task in lint-staged; lint-staged adds the files after the tasks have been run
- You need to first make changes to a file and then add them to git. Only those newly added files will be matched against the lint-staged key glob
- To format files you haven't changed and added, use the npm scripts in package.json


## Deprecated

Tslint (will be deprecated) + Prettier -D 
- prettier
- tslint
- tslint-config-prettier // disables conflicting rules
- tslint-plugin-prettier
- tslint-react // extra configuration for react projects

> tslint -c tslint.json 'src/**/*.{ts,tsx}' 
