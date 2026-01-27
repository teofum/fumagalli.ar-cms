import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemas';
import filesystemStructure from './structure/filesystemStructure';

export default defineConfig({
  name: 'default',
  title: 'fumagalli.ar',

  projectId: 'y9lopbef',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'filesystem',
      title: 'File System',
      structure: filesystemStructure,
    }),
    structureTool({
      name: 'content',
      title: 'Content',
    }),
    media({
      creditLine: { enabled: true },
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
