
npm --save-dev / -D


## Setup Git

- Initiate .gitignore: > touch .gitignore
- Add line to .gitignore: > echo 'node_modules' > .gitignore
- Add line and create file at the seme time: > echo 'node_modules' > .gitignore
// echo appends a newline on the end of the output


## package.json

Initiate package.json: > npm init -y


## Dependencies

Webpack: 
- -D
- webpack
- webpack-cli

React:
- react
- react-dom

React declaration files for TypeScript: 
- -D
- @types/react
- @types/react-dom


## Setup TypeScript, loaders

Install TypeScript locally with loaders:
- -D
- typescript
- ts-loader 
- source-map-loader

ts-loader helps Webpack compile the TypeScript code using the TypeScript’s standard configuration file named tsconfig.json

source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own sourcemaps. This will allow to debug the final output file as if you were debugging your original TypeScript source code


Compile: 
> tsc fileName.ts
> npw webpack

