import { testMethod } from "oufresh-module";

// index.ts

function getName(name: string): string {
    return name;
}
console.log(getName('krunal'));

const str = getName("Prova");
const root = document.getElementById("root");
if (root) root.innerHTML = testMethod(str);
