import { Live, Watcher } from "@asoft-ltd/live-core"
import { useState, useEffect } from "react"

export function useLive<T>(live: Live<T>): T {
    const [value, setValue] = useState(live.value)
    useEffect(() => {
        const watcher = live.watch(v => setValue(v))
        return () => {
            watcher.stop()
        }
    }, [])
    return value;
}