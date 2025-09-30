import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'slug', 'category', 'status', 'publishedDate'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Título del post',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL amigable para el post',
      },
      hooks: {
        beforeValidate: [
          (args) => {
            const { value, operation, data } = args;
            if ((operation === 'create' || operation === 'update') && data?.title && !value) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
      admin: {
        description: 'Contenido principal del post',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 300,
      admin: {
        description: 'Resumen breve del post (máx. 300 caracteres)',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      admin: {
        description: 'Etiquetas del post',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Borrador',
          value: 'draft',
        },
        {
          label: 'Publicado',
          value: 'published',
        },
        {
          label: 'Programado',
          value: 'scheduled',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Fecha de publicación',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Marcar como post destacado',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'Título SEO (máx. 60 caracteres)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          maxLength: 160,
          admin: {
            description: 'Descripción SEO (máx. 160 caracteres)',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Palabras clave separadas por comas',
          },
        },
      ],
      admin: {
        condition: (data: { status?: string }) => Boolean(data?.status === 'published'),
      },
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
  },
};
