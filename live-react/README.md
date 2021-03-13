# Live React

![badge][badge-maven] ![badge][badge-mpp] ![badge][badge-android] ![badge][badge-js] ![badge][badge-jvm] ![badge][badge-ios]

Get react a react Live hook out of the box

## Setup

```
npm install @asoft-ltd/live-react
```

## Samples

```kotlin
const live = Live<number>(1)
const watcher = liveInt.watch {
    console.log("Watcher 1: $it")
}   // console: "Watcher 1: 1"
live.value = 2 // console: "Watcher 1: 2"
watcher.stop() // or live.stop(watcher)
live.value = 3 // console: 
```

### Note:

this `Live<S>` should only be used in presentational layers. Its main purpose is to just change state for ui

[badge-maven]: https://img.shields.io/maven-central/v/tz.co.asoft/live-core/0.0.15?style=flat

[badge-mpp]: https://img.shields.io/badge/kotlin-multiplatform-blue?style=flat

[badge-android]: http://img.shields.io/badge/platform-android-brightgreen.svg?style=flat

[badge-js]: http://img.shields.io/badge/platform-js-yellow.svg?style=flat

[badge-jvm]: http://img.shields.io/badge/platform-jvm-orange.svg?style=flat

[badge-ios]: http://img.shields.io/badge/platform-ios-silver.svg?style=flat
