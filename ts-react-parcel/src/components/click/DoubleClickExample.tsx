import * as React from "react";
import { noop } from "./cancellablePromise";
import pleaseStopTriggeringClicksOnDoubleClick from "./pleaseStopTriggeringClicksOnDoubleClick";

const ClickableBox = ({ onClick, onDoubleClick }) => (
  <div onClick={onClick} onDoubleClick={onDoubleClick}>
    Click or double click
  </div>
);

ClickableBox.defaultProps = {
  onClick: noop,
  onDoubleClick: noop
};

const EnhancedClickableBox = pleaseStopTriggeringClicksOnDoubleClick(ClickableBox);

const DoubleClickExample = () => (
  <EnhancedClickableBox
    onClick={() => console.log("on click")}
    onDoubleClick={() => console.log("on double click")}
  />
);

export default DoubleClickExample;
