import { defineType } from 'sanity';
import { PiFileText } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'fileRichText',
  title: 'Rich Text File',
  icon: PiFileText,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Title', value: 'h1' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
        },
        {
          type: 'code',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      content: 'content',
    },
    prepare({ title, content }: any) {
      const image = content.filter((block: any) => block._type === 'image').at(0);

      return {
        title,
        subtitle: 'Rich Text File',
        media: image,
      };
    },
  },
});
