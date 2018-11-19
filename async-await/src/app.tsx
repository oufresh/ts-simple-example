import * as React from "react";
import * as ReactDOM from "react-dom";
import { Delay } from "./Delay";

const App = () => (
  <div>
    <h1>Ts start ...</h1>
    <Delay />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
