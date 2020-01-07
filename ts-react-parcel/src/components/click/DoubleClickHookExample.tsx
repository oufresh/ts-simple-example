import * as React from "react";
import useClickPreventionOnDoubleClick from "./useClickPreventionOnDoubleClick";
import style from "./DoubleClickHookExample.module.css";

const ClickableBox = ({
  onClick,
  onDoubleClick
}: {
  onClick: () => {} | void;
  onDoubleClick: () => {} | void;
}) => {
  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    onClick,
    onDoubleClick
  );

  return (
    <div
      className={style.clickBox}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      Click or double click
    </div>
  );
};

const DoubleClickHookExample = () => (
  <ClickableBox
    onClick={() => console.log("on click")}
    onDoubleClick={() => console.log("on double click")}
  />
);

export default DoubleClickHookExample;
