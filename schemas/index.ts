import article from './article';
import fileApp from './fileApp';
import fileDos from './fileDos';
import fileImage from './fileImage';
import fileMdx from './fileMDX';
import fileRichText from './fileRichText';
import folder from './folder';
import project from './project';
import photoCategory from './photoCategory';
import photoCollection from './photoCollection';
import projectCategory from './projectCategory';

export const schemaTypes = [
  folder,
  fileImage,
  fileRichText,
  fileMdx,
  fileApp,
  fileDos,
  article,
  photoCollection,
  photoCategory,
  project,
  projectCategory,
];
