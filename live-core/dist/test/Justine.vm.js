"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VModel = void 0;
var main_1 = require("../main");
var VModel = /** @class */ (function () {
    function VModel(count) {
        this.count = count;
        this.live = new main_1.Live(count);
    }
    VModel.prototype.increment = function () {
        // this.live.value++
        this.live.value = this.live.value + 1;
    };
    VModel.prototype.decrement = function () {
        // this.live.value++
        this.live.value = this.live.value - 1;
    };
    return VModel;
}());
exports.VModel = VModel;
