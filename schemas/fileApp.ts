import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'fileApp',
  title: 'Application',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
  ],
});
