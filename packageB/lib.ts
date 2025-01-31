export function doStuff() {
  let x: number | undefined;
  if (!x) return 0;
  // Strict errors here while Unstrict does not
  return x + 1;
}
