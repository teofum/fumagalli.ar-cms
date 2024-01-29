import { StructureResolver } from 'sanity/structure';

const filesystemStructure: StructureResolver = (S) =>
  S.document().id('root').title('My Computer').schemaType('folder');

export default filesystemStructure;
