export class MyLib {
    constructor(greeting) {
        this.greeting = greeting;
    }
    show() {
        document.getElementById(this.greeting).style.display = "block";
        document.getElementById(this.greeting).classList.add("visible");
        console.log(this.greeting);
    }
}
//# sourceMappingURL=lib.js.map