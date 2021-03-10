"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Watcher = /** @class */ (function () {
    function Watcher(callable, container) {
        this.callable = callable;
        this.container = container;
        container.push(this);
    }
    Watcher.prototype.invoke = function (value) { this.callable(value); };
    Watcher.prototype.stop = function () {
        var index = this.container.indexOf(this);
        if (index >= 0) {
            this.container.splice(index, 1);
        }
    };
    return Watcher;
}());
exports.default = Watcher;
