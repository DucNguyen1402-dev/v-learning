import type { Loader } from "@shared/overlays/loading";

import { waitForMinimumDuration } from "./utils";
type AsyncTask<T = void> = () => Promise<T>;

const runAsyncTask = async <T>(
  AsyncTask: AsyncTask<T>,
  loader?: Loader,
  minimumLoadingTime: number = 800,
): Promise<T> => {
  const start = performance.now();
  loader?.show();
  try {
    return await AsyncTask();
  } finally {
    await waitForMinimumDuration(start, minimumLoadingTime);
    loader?.hide();
  }
};

export default runAsyncTask;
