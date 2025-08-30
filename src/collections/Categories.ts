import type { CollectionConfig, CollectionSlug } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    defaultColumns: ['name', 'slug', 'description', 'color'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        placeholder: 'Nombre de la categoría',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL amigable para la categoría',
      },
      hooks: {
        beforeValidate: [
          ({ value, operation, data }) => {
            if ((operation === 'create' || operation === 'update') && data?.name && !value) {
              return data.name
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        placeholder: 'Descripción de la categoría',
      },
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Color hex para la categoría (#000000)',
        placeholder: '#3B82F6',
      },
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value === 'string') {
          if (value && !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return 'Debe ser un color hex válido (ej: #3B82F6)'
          }
          return true
        }
        if (Array.isArray(value)) {
          for (const v of value) {
            if (v && !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v)) {
              return 'Debe ser un color hex válido (ej: #3B82F6)'
            }
          }
          return true
        }
        return true
      },
    },
    {
      name: 'parentCategory',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      hasMany: false,
      admin: {
        description: 'Categoría padre (para crear subcategorías)',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mostrar en categorías destacadas',
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
      ],
    },
  ],
  timestamps: true,
  hooks: {
    beforeDelete: [
      async ({ req, id }: { req: any; id: string | number }) => {
        const posts = await req.payload.find({
          collection: 'posts',
          where: {
            category: {
              equals: id,
            },
          },
          limit: 1,
        })

        if (posts.docs.length > 0) {
          throw new Error('No se puede eliminar la categoría porque tiene posts asociados')
        }
      },
    ],
  },
}
