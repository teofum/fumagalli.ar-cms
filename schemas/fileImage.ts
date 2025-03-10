import { defineType } from 'sanity';
import { PiFileImage } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'fileImage',
  title: 'Image File',
  icon: PiFileImage,
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
