import * as React from "react";
import { MyComponent, testMethod } from "oufresh-react-module";

export class App extends React.Component<{}> {
  render() {
    const value = testMethod("Pippo");
    return (
      <div>
        <h1>{"Ciao Prova modulo"}</h1>
        <hr />
        <MyComponent text={value} />
      </div>
    );
  }
}
