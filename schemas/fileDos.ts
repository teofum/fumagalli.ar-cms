import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'fileDos',
  title: 'DOS ROM File',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
  ],
});
