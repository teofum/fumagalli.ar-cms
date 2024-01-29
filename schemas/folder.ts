import { defineType } from 'sanity';

const anyFile = [
  {
    type: 'fileImage',
  },
  {
    type: 'fileRichText',
  },
  {
    type: 'fileApp',
  },
  {
    type: 'fileDos',
  },
  {
    type: 'fileMDX',
  },
];

export default defineType({
  type: 'document',
  name: 'folder',
  title: 'Folder',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'object',
      name: 'icon',
      title: 'Custom Icon',
      fields: [
        {
          type: 'image',
          name: 'icon16',
          title: 'Small (16px)',
          validation: (rule) => rule.required(),
        },
        {
          type: 'image',
          name: 'icon32',
          title: 'Large (32px)',
          validation: (rule) => rule.required(),
        },
      ],
    },

    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'folder',
            },
            ...anyFile,
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon.icon32',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
      subtitle: 'Folder',
    }),
  },
});
