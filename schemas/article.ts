import { defineType } from 'sanity';
import { PiArticle } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: PiArticle,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      type: 'string',
      name: 'slug',
      title: 'Slug (URL)',
      validation: (rule) => rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      type: 'text',
      name: 'description',
      title: 'Description',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    },
    {
      type: 'reference',
      name: 'file',
      title: 'File',
      validation: (rule) => rule.required(),
      to: [
        {
          type: 'fileRichText',
        },
      ],
    },
    {
      type: 'date',
      name: 'legacyDate',
      title: 'Writing Date (for legacy articles)',
    },
  ],
});
