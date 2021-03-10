export default class Watcher<T> {
    constructor(private callable: (value: T) => void, private container: Watcher<T>[]) {
        container.push(this)
    }
    invoke(value: T) { this.callable(value) }
    stop() {
        const index = this.container.indexOf(this)
        if (index >= 0) {
            this.container.splice(index, 1)
        }
    }
}