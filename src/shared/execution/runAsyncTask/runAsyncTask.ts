import type { Loader } from "@shared/overlays/loading";

import { waitForMinimumDuration } from "./utils";
type AsyncTask<T = void> = () => Promise<T>;

export const runAsyncTask = async <T>(
  AsyncTask: AsyncTask<T>,
  loader?: Loader,
  minimumLoadingTime: number = 800,
): Promise<T> => {
  const start = performance.now();
  loader?.show();

  try {
    const [result] = await Promise.all([
      AsyncTask(),
      waitForMinimumDuration(start, minimumLoadingTime),
    ]);

    return result;
  } finally {
    loader?.hide();
  }
};
