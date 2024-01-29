import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'fileImage',
  title: 'Image File',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'image',
      name: 'content',
      title: 'Content',
      validation: (rule) => rule.required(),
    },
  ],
});
