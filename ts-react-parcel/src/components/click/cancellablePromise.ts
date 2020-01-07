export const cancellablePromise = (promise: Promise<any>) => {
  let isCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value: any) => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      (error: Error) => reject({ isCanceled, error })
    );
  });

  return {
    promise: wrappedPromise,
    cancel: () => (isCanceled = true)
  };
};

export const noop = () => {};

export const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
