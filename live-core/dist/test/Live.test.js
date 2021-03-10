"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
describe("given a live object", function () {
    it("should have the initial value", function () {
        var live = new main_1.Live(1);
        expect(live.value).toBe(1);
    });
    it("should call the watcher when subscribed and stop when stoped", function () {
        var live1 = new main_1.Live(1);
        var watcher1 = live1.watch(function (value) {
            console.log("Watcher 1: " + value);
            expect(value).toBe(1);
        });
        watcher1.stop();
    });
    it("should log upon change", function () {
        var live = new main_1.Live(1);
        var watcher2 = live.watch(function (value) {
            console.log("Watcher 2: " + value);
        });
        live.value = 2;
        watcher2.stop();
    });
    it("it should follow changes", function () {
        var state = new main_1.Live(0);
        state.value = 1;
        state.value = 2;
    });
});
