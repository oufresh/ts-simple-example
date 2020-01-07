import * as React from "react";
import { noop } from "./cancellablePromise";
import pleaseStopTriggeringClicksOnDoubleClick from "./pleaseStopTriggeringClicksOnDoubleClick";

type ClickableBoxProps = {
  onClick: () => void;
  onDoubleClick: () => void;
};

const ClickableBox: React.SFC<ClickableBoxProps> = ({
  onClick,
  onDoubleClick
}: ClickableBoxProps) => (
  <div onClick={onClick} onDoubleClick={onDoubleClick}>
    <span>Click or double click</span>
  </div>
);

ClickableBox.defaultProps = {
  onClick: noop,
  onDoubleClick: noop
};

const EnhancedClickableBox: React.ComponentType<ClickableBoxProps> = pleaseStopTriggeringClicksOnDoubleClick(
  ClickableBox
);

const DoubleClickExample = () => (
  <EnhancedClickableBox
    onClick={() => console.log("on click")}
    onDoubleClick={() => console.log("on double click")}
  />
);

export default DoubleClickExample;
