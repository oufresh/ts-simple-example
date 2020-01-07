import * as React from "react";
import style from "./ClickTester.module.css";

export const ClickTester: React.SFC<{}> = () => {
  let t: NodeJS.Timeout | null = null;
  const onClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    //console.log(e);
    console.log("detail ", e.nativeEvent.detail);
    console.log("timestamp", e.timeStamp);
    if (e.nativeEvent.detail == 1) {
      t = setTimeout(() => {
        console.log("onClick");
        if (t) {
          clearTimeout(t);
          t = null;
        }
      }, 300);
    } else if (e.nativeEvent.detail == 2) {
      console.log("onDoubleClick");
      if (t) {
        clearTimeout(t);
        t = null;
      }
    }
  }, []);
  return (
    <button className={style.clickTester} onClick={onClick}>
      Click me
    </button>
  );
};
