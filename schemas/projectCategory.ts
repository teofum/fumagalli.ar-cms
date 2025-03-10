import { defineType } from 'sanity';
import { PiArchive } from 'react-icons/pi';

export default defineType({
  type: 'document',
  name: 'projectCategory',
  title: 'Project Category',
  icon: PiArchive,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      projects: 'projects',
    },
    prepare({ title, projects }: any) {

      return {
        title,
        subtitle: projects ? `${projects.length} project${projects.length !== 1 ? 's' : ''}` : 'Empty',
      };
    },
  },
});
