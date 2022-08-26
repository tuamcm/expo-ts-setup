# Installation

## Starting from scratch: using a TypeScript template

- Link: <https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template>

```batch
npx create-expo-app -t expo-template-blank-typescript
```

- Base configuration: <https://docs.expo.dev/guides/typescript/#base-configuration>

## Change main file

- In new main file, add call function `registerRootComponent`

```typescript
import { registerRootComponent } from "expo"; // <== Top of file
...

registerRootComponent(App); // <== End of file
```

- In file: `package.js` change element `main` to:

```json
  //"main": "node_modules/expo/AppEntry.js",
  "main": "src/App.tsx",
```

## Using Custom Path Aliases with TypeScript

- Link: <https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript>

1. Edit your `tsconfig.json`

```json
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
```

2. Add `babel-plugin-module-resolver` as a development package to your project

```batch
npm install --save-dev babel-plugin-module-resolver
```

3. Finally, configure your `babel.config.js` (note that the syntax for your `babel.config.js` is different from your `tsconfig.json`)

```js
module.exports = function (api) {
  ...
  return {
    ...
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
```

## Run app

```batch
expo start -c
```
