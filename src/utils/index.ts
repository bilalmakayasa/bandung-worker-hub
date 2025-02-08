export function formatNumber(number: number): string {
  return new Intl.NumberFormat("id-ID").format(number);
}

export function formatDateToMonthYear(dateString: string): string {
  const date = new Date(dateString);
  
  // Get the month and year
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}