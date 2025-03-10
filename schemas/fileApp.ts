import { defineType } from 'sanity';
import { PiAppWindow } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'fileApp',
  title: 'Application',
  icon: PiAppWindow,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
  ],
});
