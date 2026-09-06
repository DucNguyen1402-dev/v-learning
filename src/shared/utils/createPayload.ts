export const createPayload = <
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  payload: T,
  keys: readonly K[],
): Pick<T, K> =>
  Object.fromEntries(keys.map((key) => [key, payload[key]])) as Pick<T, K>;
