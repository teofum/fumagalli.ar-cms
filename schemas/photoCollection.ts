import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'photoCollection',
  title: 'Photo Collection',
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
      type: 'reference',
      to: [{ type: 'fileImage' }],
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'fileImage' }],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      photos: 'photos',
      thumbnail: 'thumbnail.content',
    },
    prepare({ title, photos, thumbnail }: any) {
      console.log(thumbnail);
      return {
        title,
        subtitle: `${photos.length} photo${photos.length !== 1 ? 's' : ''}`,
        media: thumbnail,
      };
    },
  },
});
