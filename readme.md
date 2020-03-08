
# WIP

npm --save-dev / -D
npm install / i

https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
https://webpack.js.org/guides/typescript/

https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project



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

ts-loader helps Webpack compile the TypeScript code using the TypeScript’s standard configuration file named tsconfig.json

source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own sourcemaps. This will allow to debug the final output file as if you were debugging your original TypeScript source code

React declaration files for TypeScript -D
- @types/react
- @types/react-dom

Compile: 
> tsc fileName.ts
> npx webpack


## Linter

npm install eslint -D
npx eslint --init
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

Install the VS Code ESLint plug-in

VS Code -> settings (ctrl+,) -> search for Eslint -> enable "Always show status", "Eslint: Enable", "Eslint > Format: Enable"

VS Code -> settigns (ctrl+,) -> search for Eslint validate -> make sure "Typescript > Validate: Enable" and "Javascript > Validate: Enable" are checked. If they are checked, nothing will be displayed in the settings.json. If they are not enabled, there will be key/values for this in settings.json, set to false.

Console -> Problems
Console -> Output -> filter: ESLint/Prettier

Set the market on the exact problem, ctrl+. -> quick fix menu opens, including a "show documentation" option

Prettier -D
- prettier 
- eslint-config-prettier 
- eslint-plugin-prettier

Tslint (will be deprecated) + Prettier -D 
- prettier
- tslint
- tslint-config-prettier // disables conflicting rules
- tslint-plugin-prettier
- tslint-react // extra configuration for react projects

> tslint -c tslint.json 'src/**/*.{ts,tsx}' 
