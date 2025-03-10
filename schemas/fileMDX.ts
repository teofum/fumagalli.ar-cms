import { defineType } from 'sanity';
import { PiFileMd } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'fileMDX',
  title: 'MDX file',
  icon: PiFileMd,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'object',
      name: 'content',
      title: 'Content',
      validation: (rule) => rule.required(),
      fields: [
        {
          type: 'string',
          name: 'slug',
          title: 'Article slug',
          validation: (rule) => rule.required(),
        },
      ],
    },
  ],
});
