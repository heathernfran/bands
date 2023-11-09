export function formatDate(date: number) {
  const dateObject = new Date(date);
  return dateObject.toDateString();
}
