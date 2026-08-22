export function createArray<T = undefined>(
  length: number,
  mapFn?: (_: undefined, index: number) => T,
): T[] {
  if (!mapFn) {
    return Array.from({ length }) as T[];
  }

  return Array.from({ length }, (_, index) => mapFn(undefined, index));
}

export function findOrThrow<T>(value: T | undefined): T {
  if (!value) throw new Error("Not found");
  return value;
}
