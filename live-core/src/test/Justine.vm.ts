import { Live } from '../main'

export class VModel {
    live: Live<number>
    constructor(private count: number) {
        this.live = new Live(count);
    }

    increment() {
        // this.live.value++
        this.live.value = this.live.value + 1
    }

    decrement() {
        // this.live.value++
        this.live.value = this.live.value - 1
    }
}