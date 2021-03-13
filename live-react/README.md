# Live React

![badge][badge-maven] ![badge][badge-mpp] ![badge][badge-android] ![badge][badge-js] ![badge][badge-jvm] ![badge][badge-ios]

## Introduction
Built on top of [Live<T>](../live-core), this extension will get you a react hook that follows `Live<T>` and updates it's value when the value of `Live<T>` changes

## Setup

```
npm install @asoft-ltd/live-react
```

## Samples

Step 1: get the `useLive` hook
```kotlin
import { Live, useLive } from "@asoft-ltd/live-react"

const live = new Live(1)

interface CounterProps {
  onToggle: () => void
}

function Counter(props: CounterProps) {
  const value = useLive(live)
  return (
    <div className="App">Live Value: {value}</div>
  );
}
```

### Note:

Since `Live<S>` should only be used in presentational layers and it's main purpose is to just change state for ui, `useLive` doesn't provide the mechanism to update the state.

[badge-maven]: https://img.shields.io/maven-central/v/tz.co.asoft/live-core/0.0.15?style=flat

[badge-mpp]: https://img.shields.io/badge/kotlin-multiplatform-blue?style=flat

[badge-android]: http://img.shields.io/badge/platform-android-brightgreen.svg?style=flat

[badge-js]: http://img.shields.io/badge/platform-js-yellow.svg?style=flat

[badge-jvm]: http://img.shields.io/badge/platform-jvm-orange.svg?style=flat

[badge-ios]: http://img.shields.io/badge/platform-ios-silver.svg?style=flat
