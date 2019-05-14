# ts-react-module

An example module with typescript, react and rollup


## Typescript configuration

In **tsconfig.json** we have:

- outDir: where to place generated .js files.
- target: what ECMAScript version to target. Since Typescript is a Javascript super-set, it contains features/syntaxes that are not supported by all browser vendors. We specify the compilation target to maintain syntax compatibility.
- sourceMap: while transpiling, Typescript can generate a source-map to allow access to the original Typescript code during the debugging on the created JS file.
- declaration: Typescript ecosystem is built around .d.ts, the so-called Type Definitions. Adding this flag will generate the .d.ts file for you and include all exported types and functions in it.
- include: where to look for .ts files (src).
- exclude: which folders to avoid (node_modules) - since we don't want to transpile existing modules and build our output folder.

## Testing

We use jest as a test framework. **ts-test** is used for support of Typescript.

## Build tool

We use Rollup to build our module. 