import { defineType } from 'sanity';
import { PiArchive } from 'react-icons/pi';
import { sanityImage } from '../utils/sanity.image';

export default defineType({
  type: 'document',
  name: 'photoCategory',
  title: 'Photo Category',
  icon: PiArchive,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'photoCollection' }],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      cols: 'collections',
      thumb0: 'collections.0.thumbnail',
      thumb1: 'collections.1.thumbnail',
      thumb2: 'collections.2.thumbnail',
      thumb3: 'collections.3.thumbnail',
    },
    prepare({ title, cols, thumb0, thumb1, thumb2, thumb3 }: any) {
      const colsCount = Object.keys(cols).filter((key) => cols[key]).length;

      return {
        title,
        subtitle: cols
          ? `${colsCount} collection${colsCount !== 1 ? 's' : ''}`
          : 'Empty',
        media: (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: thumb1 ? '1fr 1fr' : '1fr',
            }}
          >
            {[thumb0, thumb1, thumb2, thumb3].map((thumb) =>
              thumb ? (
                <img
                  src={sanityImage(thumb).auto('format').width(100).url()}
                  alt=""
                  style={{
                    objectFit: 'cover',
                    position: 'static',
                    aspectRatio: '1',
                  }}
                />
              ) : null,
            )}
          </div>
        ),
      };
    },
  },
});
