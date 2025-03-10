import { defineType } from 'sanity';
import { PiRocketLaunch } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: PiRocketLaunch,
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