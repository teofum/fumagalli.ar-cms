import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'photoCategory',
  title: 'Photo Category',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'reference',
      to: [{ type: 'fileImage' }],
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'photoCollection' }],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
});
