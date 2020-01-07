import React, { useRef } from "react";

/**
 * With Hooks, we can extract to a custom Hook both logics: handling cancellable promises and redefining onClick and onDoubleClick handlers.
To extract the logic of handling cancellable promises, we define a custom Hook that holds a ref with the array of pending promises, defines the api to interact with this array, and returns the api.
We don’t store the pending promises in a state variable because we don’t want the component to be re-rendered every time this array changes.
 */
const useCancellablePromises = () => {
  const pendingPromises = useRef([]);

  const appendPendingPromise = (promise) =>
    (pendingPromises.current = [...pendingPromises.current, promise]);

  const removePendingPromise = (promise) =>
    (pendingPromises.current = pendingPromises.current.filter((p) => p !== promise));

  const clearPendingPromises = () => pendingPromises.current.map((p) => p.cancel());

  const api = {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises
  };

  return api;
};

export default useCancellablePromises;
