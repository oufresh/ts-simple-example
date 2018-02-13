"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyLib = /** @class */ (function () {
    function MyLib(greeting) {
        this.greeting = greeting;
    }
    MyLib.prototype.show = function () {
        document.getElementById(this.greeting).style.display = "block";
        console.log(this.greeting);
    };
    return MyLib;
}());
exports.MyLib = MyLib;
//# sourceMappingURL=lib.js.map