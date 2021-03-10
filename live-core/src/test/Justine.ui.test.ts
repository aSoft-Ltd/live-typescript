import { VModel } from './Justine.vm'
import { delay } from './tools';

describe("Given a view model", () => {
    xit("should update the state", () => {
        const vm = new VModel(0);
        vm.increment()
        vm.increment()
        expect(vm.live.value).toBe(2)
    })

    it("should be watchable", () => {
        const vm = new VModel(0);
        const watcher = vm.live.watch(value => {
            console.log(`count: ${value}`)
        })
        vm.decrement()
        vm.increment()
        vm.decrement()
        vm.decrement()
    })
})