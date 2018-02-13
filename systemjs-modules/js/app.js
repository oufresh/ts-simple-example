System.register(["./lib.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Pippo() {
        console.log("Pippo");
    }
    var Lib, App;
    return {
        setters: [
            function (Lib_1) {
                Lib = Lib_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor(id) {
                    this.id = id;
                    this.start();
                }
                start() {
                    let lib = new Lib.MyLib(this.id);
                    lib.show();
                }
                hello() {
                }
            };
            /*declare global {
                interface Window { app: any; }
            }*/
            //window.app = new App("Box");
            window.app = new App("Box");
            window.app.start();
        }
    };
});
//# sourceMappingURL=app.js.map