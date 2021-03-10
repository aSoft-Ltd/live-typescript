import Watcher from './Watcher'

export default class Live<T>{
    constructor(private _value: T) { }

    private watchers: Watcher<T>[] = []

    public get value() {
        return this._value
    }

    public set value(value: T) {
        this._value = value
        this.watchers.forEach(watcher => watcher.invoke(value))
    }

    watch(callable: (value: T) => void): Watcher<T> {
        const watcher = new Watcher(callable, this.watchers);
        // setTimeout(() => { watcher.invoke(this.value) }, 0)
        watcher.invoke(this.value)
        return watcher
    }

    stop(watcher: Watcher<T>) {
        watcher.stop()
    }

    stopAll() {
        this.watchers.forEach(watcher => watcher.stop())
        this.watchers = []
    }
}