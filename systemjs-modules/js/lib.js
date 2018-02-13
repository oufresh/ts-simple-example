System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyLib;
    return {
        setters: [],
        execute: function () {
            MyLib = class MyLib {
                constructor(greeting) {
                    this.greeting = greeting;
                }
                show() {
                    document.getElementById(this.greeting).style.display = "block";
                    document.getElementById(this.greeting).classList.add("visible");
                    console.log(this.greeting);
                }
            };
            exports_1("MyLib", MyLib);
        }
    };
});
//# sourceMappingURL=lib.js.map