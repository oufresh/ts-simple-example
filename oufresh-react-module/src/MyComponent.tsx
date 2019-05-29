import * as React from "react";
import * as style "./MyComponent.module.css";

export interface IMyComponentProps {
    text: string;
}

export const MyComponent = (props: IMyComponentProps) => {
    const str = "Hello, the text is: " + props.text;
    return <div className={"MyComponentBackGround"}><label>{str}</label></div>;
};
