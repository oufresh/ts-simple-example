"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lib = require("./lib.js");
var App = /** @class */ (function () {
    function App(id) {
        this.id = id;
        this.start();
    }
    App.prototype.start = function () {
        var lib = new Lib.MyLib(this.id);
        lib.show();
    };
    App.prototype.hello = function () {
    };
    return App;
}());
function Pippo() {
    console.log("Pippo");
}
/*declare global {
    interface Window { app: any; }
}*/
//window.app = new App("Box");
window.app = new App("Box");
//# sourceMappingURL=app.js.map