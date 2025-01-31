export function doStuff() {
  let x: number | undefined;
  // Strict errors here while Unstrict does not
  return x + 1;
}
