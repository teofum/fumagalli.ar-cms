import { defineType } from 'sanity';
import { PiFloppyDisk } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'fileDos',
  title: 'DOS ROM File',
  icon: PiFloppyDisk,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
  ],
});
