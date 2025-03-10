import { defineType, ObjectInputProps, set, useClient } from 'sanity';
import { Button, Text, TextInput } from '@sanity/ui';
import { useRef } from 'react';
import { PiImages } from 'react-icons/pi';

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
      components: {
        input: (props: ObjectInputProps<any>) => {
          const id = useRef<string>('');
          const client = useClient();

          const tryImport = async () => {
            if (!id.current) return;

            const data = await client.fetch(`
              *[ _type=="folder" && _id=="${id.current}" ][0]
                .items[ @->_type=="fileImage" ]
            `);

            props.onChange(set(data));
          };

          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {props.renderDefault(props)}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                }}
              >
                <TextInput
                  onChange={(ev) => (id.current = ev.currentTarget.value)}
                  placeholder="Folder ID"
                />
                <Button mode="ghost" onClick={tryImport}>
                  <Text size={1} weight="medium">
                    Import folder
                  </Text>
                </Button>
              </div>
            </div>
          );
        },
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      photos: 'photos',
      media: 'thumbnail.content',
    },
    prepare({ title, photos, media }: any) {
      return {
        title,
        subtitle: photos ? `${photos.length} photo${photos.length !== 1 ? 's' : ''}` : 'Empty',
        media,
      };
    },
  },
});
