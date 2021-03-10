"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
function delay(time) {
    return new Promise(function (res) {
        setTimeout(function () { res(); }, time);
    });
}
exports.delay = delay;
