import * as React from "react";
import * as style from "./App.module.css";
import { ClickTester } from "./click/ClickTester";
import DoubleClickHookExample from "./click/DoubleClickHookExample";

export const App: React.SFC<{}> = () => (
  <div className={style.container}>
    <h3>Hello!</h3>
    <div className={style.main}>
      <ClickTester />
      <hr></hr>
      <DoubleClickHookExample />
    </div>
  </div>
);
