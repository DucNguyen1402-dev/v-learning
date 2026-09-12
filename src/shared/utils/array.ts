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

export function isArrayShallowEqual(
  a?: readonly unknown[],
  b?: readonly unknown[],
): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) return false;
  }
  return true;
}
