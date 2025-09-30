import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return '';

  const parsedDate = new Date(date);

  return format(parsedDate, "d 'de' MMMM 'de' yyyy", { locale: es });
}
