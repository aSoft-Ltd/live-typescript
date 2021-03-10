"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Justine_vm_1 = require("./Justine.vm");
describe("Given a view model", function () {
    xit("should update the state", function () {
        var vm = new Justine_vm_1.VModel(0);
        vm.increment();
        vm.increment();
        expect(vm.live.value).toBe(2);
    });
    it("should be watchable", function () {
        var vm = new Justine_vm_1.VModel(0);
        var watcher = vm.live.watch(function (value) {
            console.log("count: " + value);
        });
        vm.decrement();
        vm.increment();
        vm.decrement();
        vm.decrement();
    });
});
