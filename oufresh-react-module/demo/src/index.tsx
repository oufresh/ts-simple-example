import * as React from "react";
import * as ReactDOM from "react-dom";
import { testMethod } from "../../src/function";
import { MyComponent } from "../../src/MyComponent";

console.log("demo del modulo react e typescript");
console.log(testMethod("pippo"));

ReactDOM.render(
  <MyComponent text={"prova"} />,
  document.getElementById("root")
);
