export function resetDateLocal(dateInput: string | Date | null | undefined): string {
  if (!dateInput) return '';

  const date = new Date(dateInput);
  const reset = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(reset);
}
