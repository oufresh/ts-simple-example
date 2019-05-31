import * as React from "react";
import * as style from "./MyComponent.module.css";

export interface IMyComponentProps {
    text: string;
}

export const MyComponent = (props: IMyComponentProps) => {
    const str = "Hello, the text is: " + props.text;
    return <div className={style.myComponentBackGround}><label>{str}</label></div>;
};
