import { defineType, ObjectInputProps, set, useClient } from 'sanity';
import { Button, Text, TextInput } from '@sanity/ui';
import { useRef } from 'react';
import { PiImages, PiTag } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'photoCollection',
  title: 'Photo Collection',
  icon: PiImages,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: { source: 'title' },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Photos', value: 'photos' },
          { title: 'Filters', value: 'filters' },
        ],
      },
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image' }],
      hidden: ({ document }) => document?.type !== 'photos',
    },
    {
      name: 'filters',
      title: 'Filters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tag', title: 'Tag', type: 'string' },
            {
              name: 'values',
              title: 'Values',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: {
              tag: 'tag',
              values: 'values',
            },
            prepare({ tag, values }) {
              return {
                title: tag,
                subtitle: values.join(', '),
                icon: PiTag,
              };
            },
          },
        },
      ],
      hidden: ({ document }) => document?.type !== 'filters',
    },
  ],
  preview: {
    select: {
      title: 'title',
      photos: 'photos',
      filters: 'filters',
      media: 'thumbnail',
    },
    prepare({ title, photos, filters, media }) {
      return {
        title,
        subtitle: photos
          ? `${photos.length} photo${photos.length !== 1 ? 's' : ''}`
          : filters
            ? filters
                .map(
                  (f: { tag: string; values: string[] }) =>
                    `${f.tag}: ${f.values.join(',')}`,
                )
                .join(';')
            : 'Empty',
        media,
      };
    },
  },
});
