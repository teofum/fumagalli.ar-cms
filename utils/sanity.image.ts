import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const imageBuilder = createImageUrlBuilder({
  projectId: 'y9lopbef',
  dataset: 'production',
});

export function sanityImage(source: SanityImageSource, autoFormat: boolean = true) {
  if (autoFormat) return imageBuilder.image(source).auto('format');
  return imageBuilder.image(source);
}
