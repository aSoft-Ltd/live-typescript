"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Watcher_1 = __importDefault(require("./Watcher"));
var Live = /** @class */ (function () {
    function Live(_value) {
        this._value = _value;
        this.watchers = [];
    }
    Object.defineProperty(Live.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.watchers.forEach(function (watcher) { return watcher.invoke(value); });
        },
        enumerable: false,
        configurable: true
    });
    Live.prototype.watch = function (callable) {
        var watcher = new Watcher_1.default(callable, this.watchers);
        // setTimeout(() => { watcher.invoke(this.value) }, 0)
        watcher.invoke(this.value);
        return watcher;
    };
    Live.prototype.stop = function (watcher) {
        watcher.stop();
    };
    Live.prototype.stopAll = function () {
        this.watchers.forEach(function (watcher) { return watcher.stop(); });
        this.watchers = [];
    };
    return Live;
}());
exports.default = Live;
