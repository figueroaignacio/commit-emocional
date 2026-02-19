import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return '';

  const parsedDate = new Date(date);

  return format(parsedDate, "d 'de' MMMM 'de' yyyy", { locale: es });
}

export function getReadingTime(content: any): number {
  if (!content || !content.root || !content.root.children) return 0;

  let text = '';

  const traverse = (node: any) => {
    if (node.text) {
      text += node.text + ' ';
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  };

  traverse(content.root);

  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 200);
  return time;
}
