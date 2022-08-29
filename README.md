# Installation

## Starting from scratch: using a TypeScript template

- Link: <https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template>

```batch
npx create-expo-app -t expo-template-blank-typescript
```

- Base configuration: <https://docs.expo.dev/guides/typescript/#base-configuration>

## Change main file (* Shouldn't use this setup because the app need 2 times saving to effect changes in App file)

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

- Run expo:

```batch
expo start -c
```

- Run typescript checking

```batch
npx tsc -w
```

# How to debug

## Download app `react-native-debugger`

- Link: <https://github.com/jhen0409/react-native-debugger/releases>

- Get version: `...universal.dmg`

## Run Debug (Run this step before run `expo start -c`)

- Open app `react-native-debugger` installed

- `window + T` to open new tab

- Add port: `19000` and Confirm

- Start expo `expo start -c`

# IMPLEMENT - How to use Redux Persist in React Native

- Persist and rehydrate a redux store.

## Reference

- Link: <https://blog.logrocket.com/use-redux-persist-react-native/>

- Link: <https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/>

- Link: <https://www.npmjs.com/package/redux-persist>

- Link: <https://www.npmjs.com/package/@react-native-async-storage/async-storage>

## Install packages

```bash
npm i @react-native-async-storage/async-storage redux-persist
```

## Setup

1. Path: `src/app/store.ts`

```typescript
...
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";
...

const persistConfig = {
  key: "root",
  storage: AsyncStorage, //save local storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer); //an enhanced reducer
...
export const store = configureStore({
  reducer: persistedReducer, //new reducer
  ...
});

export const persistor = persistStore(store); // persistor object
...

```

2. Path: `./App.tsx`

```typescript
...
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store"; // add persistor
...

export default function App() {
  return (
    <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
      <PersistGate loading={<Text>Loading PersistGate ...</Text>} persistor={persistor}>
        ...
      </PersistGate>
    </Provider>
  );
}
```
