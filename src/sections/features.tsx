// Componetns
import { Card } from '@/components/card';
import { Book, CloudRain, Edit3, Heart, Lamp, MapPin, MessageCircle, Star } from 'lucide-react';

export const features = [
  {
    icon: Book,
    title: 'Conocimiento profundo',
    description:
      'Explora textos que abren puertas a ideas y perspectivas que transforman tu forma de pensar.',
  },
  {
    icon: MessageCircle,
    title: 'Diálogos internos',
    description:
      'Reflexiona sobre conversaciones escritas que invitan a cuestionarte y comprender tus emociones.',
  },
  {
    icon: Edit3,
    title: 'Creación consciente',
    description:
      'Aprende a plasmar tus pensamientos y sentimientos de manera clara y significativa.',
  },
  {
    icon: Star,
    title: 'Inspiración diaria',
    description:
      'Encuentra fragmentos que iluminan tu día y te motivan a seguir escribiendo y explorando.',
  },
  {
    icon: Heart,
    title: 'Sentimientos',
    description:
      'Expresa emociones profundas y conecta con lo que sientes a través de la escritura.',
  },
  {
    icon: MapPin,
    title: 'Experiencias',
    description: 'Comparte momentos vividos y reflexiona sobre lo que cada experiencia te enseñó.',
  },
  {
    icon: Lamp,
    title: 'Reflexiones',
    description:
      'Textos que invitan a pensar, cuestionar y comprender distinfeatas perspectivas de la vida.',
  },
  {
    icon: CloudRain,
    title: 'Desahogo',
    description:
      'Un espacio para liberar pensamientos y emociones que necesitas sacar de tu mente.',
  },
];

export function Features() {
  return (
    <section className="container">
      <h2 className="mb-5">Escrituras sobre...</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <li key={index}>
            <Card
              title={feature.title}
              description={feature.description}
              icon={
                <feature.icon className="border-border border bg-background p-2 size-8 rounded-full" />
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
