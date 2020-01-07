import * as React from "react";
import { delay, cancellablePromise, CancellablePromise } from "./cancellablePromise";

type HOCClickableBoxProps = {
  onClick: () => void;
  onDoubleClick: () => void;
};

const pleaseStopTriggeringClicksOnDoubleClick = (
  WrappedComponent: React.ComponentType<HOCClickableBoxProps>
): React.ComponentType<HOCClickableBoxProps> => {
  class ComponentWrapper extends React.Component<HOCClickableBoxProps> {
    componentWillUnmount(): void {
      // cancel all pending promises to avoid
      // side effects when the component is unmounted
      this.clearPendingPromises();
    }

    pendingPromises: Array<CancellablePromise> = [];

    appendPendingPromise = (promise: CancellablePromise) =>
      (this.pendingPromises = [...this.pendingPromises, promise]);

    removePendingPromise = (promise: CancellablePromise) =>
      (this.pendingPromises = this.pendingPromises.filter((p) => p !== promise));

    clearPendingPromises = () => this.pendingPromises.map((p) => p.cancel());

    handleClick = () => {
      // create the cancelable promise and add it to
      // the pending promises queue
      const waitForClick = cancellablePromise(delay(300));
      this.appendPendingPromise(waitForClick);

      return waitForClick.promise
        .then(() => {
          // if the promise wasn't cancelled, we execute
          // the callback and remove it from the queue
          this.removePendingPromise(waitForClick);
          if (this.props.onClick) this.props.onClick();
        })
        .catch((errorInfo) => {
          // rethrow the error if the promise wasn't
          // rejected because of a cancelation
          this.removePendingPromise(waitForClick);
          if (!errorInfo.isCanceled) {
            throw errorInfo.error;
          }
        });
    };

    handleDoubleClick = () => {
      // all (click) pending promises are part of a
      // dblclick event so we cancel them
      this.clearPendingPromises();
      if (this.props.onDoubleClick) this.props.onDoubleClick();
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        />
      );
    }
  }

  /*ComponentWrapper.displayName = `withClickPrevention(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;*/

  return ComponentWrapper;
};

export default pleaseStopTriggeringClicksOnDoubleClick;
