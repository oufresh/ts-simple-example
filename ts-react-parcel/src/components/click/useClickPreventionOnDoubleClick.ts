import useCancellablePromises from "./useCancellablePromises";
import { cancellablePromise, delay } from "./cancellablePromise";

const useClickPreventionOnDoubleClick = (
  onClick: () => {} | void,
  onDoubleClick: () => {} | void
): Array<any> => {
  const api = useCancellablePromises();

  const handleClick = (): Promise<any> => {
    api.clearPendingPromises();
    const waitForClick = cancellablePromise(delay(300));
    api.appendPendingPromise(waitForClick);

    return waitForClick.promise
      .then(() => {
        api.removePendingPromise(waitForClick);
        onClick();
      })
      .catch((errorInfo) => {
        api.removePendingPromise(waitForClick);
        if (!errorInfo.isCanceled) {
          throw errorInfo.error;
        }
      });
  };

  const handleDoubleClick = (): void => {
    api.clearPendingPromises();
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
};

export default useClickPreventionOnDoubleClick;
