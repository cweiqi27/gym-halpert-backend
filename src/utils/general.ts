export function omitSingle<T, K extends keyof T>(
  key: K,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { [key]: _, ...obj }: T
) {
  return obj;
}
