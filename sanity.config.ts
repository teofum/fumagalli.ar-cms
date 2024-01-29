import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import filesystemStructure from './structure/filesystemStructure';
import { codeInput } from '@sanity/code-input';

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
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
