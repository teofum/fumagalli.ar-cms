import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'string',
      name: 'slug',
      title: 'Slug (URL)',
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
  ],
});