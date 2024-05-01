# ⚛︎React Native Pokedex App

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<aqui gif>

## 1. Description
This project is a new practical item of my React Native mobile app series that made with:
 - react native v0.73.6
 - [stack-navigator](https://reactnavigation.org/docs/stack-navigator/) - (to make transitions between screens)
 - [react-navigation/material-bottom-tabs](https://reactnavigation.org/docs/material-bottom-tab-navigator/) - (material-design themed tab bar on the bottom)
 - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - (UI buttons and logos)

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