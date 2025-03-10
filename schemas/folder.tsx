import { defineType } from 'sanity';
import { PiFolder } from 'react-icons/pi';
import { sanityImage } from '../utils/sanity.image';

const anyFile = [
  {
    type: 'fileImage',
  },
  {
    type: 'fileRichText',
  },
  {
    type: 'fileApp',
  },
  {
    type: 'fileDos',
  },
  {
    type: 'fileMDX',
  },
];

export default defineType({
  type: 'document',
  name: 'folder',
  title: 'Folder',
  icon: PiFolder,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      type: 'object',
      name: 'icon',
      title: 'Custom Icon',
      fields: [
        {
          type: 'image',
          name: 'icon16',
          title: 'Small (16px)',
          validation: (rule) => rule.required(),
        },
        {
          type: 'image',
          name: 'icon32',
          title: 'Large (32px)',
          validation: (rule) => rule.required(),
        },
      ],
    },

    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'folder',
            },
            ...anyFile,
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon.icon16',
      items: 'items',
    },
    prepare: ({ title, icon, items }) => {
      const itemsText = items ? `${items.length} item${items.length === 1 ? '' : 's'}` : 'Empty';
      return {
        title,
        subtitle: `Folder – ${itemsText}`,
        media: icon ? (
          <img src={sanityImage(icon).format('png').width(16).url()}
               alt={title}
               width={16}
               height={16}
               style={{
                 margin: '8px',
                 width: 16,
                 height: 16,
                 imageRendering: 'pixelated',
               }} />) : null,
      };
    },
  },
});
