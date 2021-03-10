import { Live } from '@asoft-ltd/live-core'

const live = new Live("Test 1");

const watch = live.watch(value => {
    console.log(value)
})

live.value = "Test 2"

live.value = "Test 3"

console.log(live)

watch.stop()

live.value = "Test 4"

live.value = "Test 5"

console.log(live)