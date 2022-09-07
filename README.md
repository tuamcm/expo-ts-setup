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

## Installation

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

# IMPLEMENT - How to use Navigation in React Native

## Reference Navigation

- Link: <https://reactnavigation.org/docs/getting-started>
- Link: <https://reactnavigation.org/docs/hello-react-navigation>
- Link (typescript): <https://reactnavigation.org/docs/typescript/>
- Link : <https://reactnavigation.org/docs/getting-started>

## Installation Navigation

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

```bash
expo install react-native-screens react-native-safe-area-context
```

## Add types check typescript

- Path: `src/app/navigation/types.ts`

```typescript
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: { userId: string } | undefined;
  Repo: undefined;
  Article: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
```

## Use hook `useNavigation`

- Path: `src/components/ArticleComponent.tsx`

```typescript
...
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "app/navigation/types";

const ArticleComponent: React.FC = () => {
  ...
  const navigation = useNavigation<HomeScreenNavigationProp>();
  ...
  return (
    <View>
      ...
      <TouchableOpacity
        onPress={() => navigation.navigate("Repo")}
        style={{ padding: 20, backgroundColor: "#ffddee", width: "50%" }}
      >
        <Text>Go to Repo </Text>
      </TouchableOpacity>
     ...
    </View>
  );
};
```

## Authentication flows

```typescript
const MainNavigation: React.FC = () => {
  ...
  const { isLogged } = useAppSelector(authState); // redux get login value

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={!isLogged ? "Home" : "Article"}
      >
        {!isLogged ? (
          <>
            <Stack.Screen name="Home" component={HomeComponent} />
          </>
        ) : (
          <>
            <Stack.Screen name="Article" component={ArticleComponent} />
            <Stack.Screen name="Repo" component={RepoComponent} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## React Navigation lifecycle events

- Reference: <https://reactnavigation.org/docs/navigation-lifecycle#react-navigation-lifecycle-events>

```typescript
import { useFocusEffect } from '@react-navigation/native';
...

function Profile() {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return <ProfileContent />;
}
```

# Splash Screen

## Installation `expo-splash-screen`

- Reference: <https://docs.expo.dev/versions/latest/sdk/splash-screen/>
- <https://github.com/expo/examples/blob/master/with-splash-screen/App.js>

```bash
expo install expo-splash-screen
```

## Setup `expo-splash-screen`

- We should setup the package in NavigationContainer to effect navigation fast

```typescript
...
import * as SplashScreen from "expo-splash-screen";

// disable auto hide splash screen
// we should hide splash screen after we have loaded all resource what the app need to run
SplashScreen.preventAutoHideAsync();
...

const Main = () => {
  ...

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Inter_900Black,
          Roboto_300Light,
          Roboto_100Thin_Italic,
        });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const hideSplashScreen = async () => {
    // wait for NavigationContainer effect
    await new Promise((resolve) => setTimeout(resolve, 200));
    // hide the splash screen
    await SplashScreen.hideAsync();
  };

  // we don't show anything when the app is not ready
  // because the navigation will run before the app load full resources such as font
  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer linking={linking} onReady={hideSplashScreen}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Main;
```

# Font

- Reference: <https://docs.expo.dev/versions/latest/sdk/font/>
- <https://docs.expo.dev/guides/using-custom-fonts/>
- <https://github.com/expo/google-fonts>
- <https://directory.vercel.app/>

## Installation 

```bash
expo install expo-font @expo-google-fonts/inter
```

## Setup load fonts

```typescript
  ...
  import * as Font from "expo-font";
  import { Inter_900Black } from "@expo-google-fonts/inter";
  ...

  const customFonts = {
    "Combo-Regular": require("./../assets/fonts/Combo-Regular.ttf"),
    "DancingScript-Regular": require("./../assets/fonts/DancingScript-Regular.ttf"),
  };

  const importFonts = {
    Inter_900Black,
    Roboto_300Light,
    Roboto_100Thin_Italic,
  };

  ...
  useEffect(() => {
    async function prepare() {
      try {
        // 1. Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(importFonts);

        // 2. Load custom fonts
        // We need to add the fonts inside the `assets folder`
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
```





# Getting Started With GraphQL.js

- Reference: <https://graphql.org/graphql-js/>








# __Note typescript__

1. Extracting types of props

- Reference: <https://github.com/expo/vector-icons/issues/153#issuecomment-787130328>
- Extracting types of props on a component is a pretty common thing to do when using react libraries with typescript, so you can use this common pattern:
- Use pattern: `React.ComponentProps<typeof ObjectNeedExtract>['name']`
- Example:

```typescript
type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];
const iconName: MaterialIconName =  '3d-rotation'
```

2. Get `StyleProp`

- Reference:
- <https://medium.com/@zvona/stylesheets-in-react-native-with-typescript-revisited-6b4ba0a899d2>
- <https://medium.com/@zvona/react-native-and-typescript-meets-styles-b727ecf7e677>

```typescript
import { StyleProp, TextStyle, ViewStyle, ImageStyle } from "react-native";
...

BlockViewStyle: StyleProp<ViewStyle>;
InputTextStyle: StyleProp<TextStyle>;
InputImageStyle: StyleProp<ImageStyle>;
```
