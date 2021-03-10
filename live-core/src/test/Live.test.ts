import { Live } from "../main"
import { delay } from './tools'

describe("given a live object", () => {
    it("should have the initial value", () => {
        const live = new Live(1);
        expect(live.value).toBe(1)
    })

    it("should call the watcher when subscribed and stop when stoped", () => {
        const live1 = new Live(1);
        const watcher1 = live1.watch(value => {
            console.log(`Watcher 1: ${value}`)
            expect(value).toBe(1)
        })
        watcher1.stop()
    })

    it("should log upon change", () => {
        const live = new Live(1);
        const watcher2 = live.watch(value => {
            console.log(`Watcher 2: ${value}`)
        })
        live.value = 2
        watcher2.stop()
    })

    it("it should follow changes", () => {
        const state = new Live(0);
        state.value = 1
        state.value = 2
    })
})