export interface CancellablePromise {
  promise: Promise<{}>;
  cancel: () => {};
}

export const cancellablePromise = (promise: Promise<{}>): CancellablePromise => {
  let isCanceled = false;

  const wrappedPromise = new Promise<{}>((resolve, reject) => {
    promise.then(
      (value: {}) => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      (error: Error) => reject({ isCanceled, error })
    );
  });

  return {
    promise: wrappedPromise,
    cancel: (): {} => (isCanceled = true)
  };
};

export const noop = (): void => {};

export const delay = (n: number): Promise<{}> =>
  new Promise((resolve) => setTimeout(resolve, n));
