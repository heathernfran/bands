export function convertCentsToDollars(cost: number) {
  const dollars = Math.round(cost / 100);
  return dollars;
}
