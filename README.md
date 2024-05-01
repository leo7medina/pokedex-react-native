# ⚛︎React Native Pokedex App

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<aqui gif>

## 1. Description
This project is a new practical item of my React Native mobile app series that made with:
 - react native v0.73.6

## 2. API and Fonts
- [pokemon-api](https://pokeapi.co/) - Pokemón RESTFULL API

## 3. Available Scripts
<ul>
  <li>
    <span style="background-color: #6495ed;color: #ffff">The project has been tested on Android device
    </span>
  </li>
</ul>


In the project directory, you can run special commands like these:

To install dependencies 

<ul>
  <li>$ npm install | $ yarn install</li>
  <li>$ npx react-native run-android</li>
  <li>$ npx react-native run-ios (iOS)</li>
  <ul>
    <li>$ cd project/ios/ and run $ pod install</li>
  </ul>
</ul>

To start the development server and run app on simulator or device

## 4. Notice
<ul>
  <li>
    <span style="background-color: #7fffd4;">Feel free to   fork this repo and add your own twist!
    </span>
  </li>
</ul>

<hr>


### 👋 You can visit my webpage here: [Leonardo's website](https://github.com/leo7medina)






# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



### Notes:

 - Add next configuration in /node_modules/react-native-vector-icons/fonts.gradle if there is an error with the dependencie.

    android.applicationVariants.all { def variant ->
        def targetName = variant.name.capitalize()

        def lintAnalyzeDebugTask = tasks.findByName("lintAnalyzeDebug")
        if (lintAnalyzeDebugTask) {
            lintAnalyzeDebugTask.dependsOn(fontCopyTask)
            lintAnalyzeDebugTask.mustRunAfter(fontCopyTask)
        }

        def lintVitalAnalyzeReleaseTask = tasks.findByName("lintVitalAnalyzeRelease")
        if (lintVitalAnalyzeReleaseTask) {
            lintVitalAnalyzeReleaseTask.dependsOn(fontCopyTask)
            lintVitalAnalyzeReleaseTask.mustRunAfter(fontCopyTask)
        }

        def generateAssetsTask = tasks.findByName("generate${targetName}Assets")
        generateAssetsTask.dependsOn(fontCopyTask)
    }