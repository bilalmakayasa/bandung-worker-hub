export function formatNumber(number: number): string {
  return new Intl.NumberFormat("id-ID").format(number);
}
