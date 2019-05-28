import * as React from "react";
import * as ReactDOM from "react-dom";
import { MyComponent, testMethod } from "oufresh-react-module";

console.log("demo del modulo react e typescript");
console.log(testMethod("pippo"));

ReactDOM.render(
  <MyComponent text={"ciao prova"} />,
  document.getElementById("root")
);
