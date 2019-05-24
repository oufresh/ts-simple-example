import * as React from "react";

export interface IMyComponentProps {
    text: string;
};

export const MyComponent = (props: IMyComponentProps) => {
    const str = "Hello, the text is: " + props.text;
    return <div><label>{str}</label></div>;
};
