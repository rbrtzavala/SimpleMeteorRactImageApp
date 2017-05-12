// Create Image List component
import React from 'react';

import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400/fc00fc/00ff99' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400/fc00fc/00ff99' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400/fc00fc/00ff99'}
];

// Create component
const ImageList = () => {
  const RenderedImages = IMAGES.map((image) => {
    return <ImageDetail picture={image} />
  });

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

// Export component
export default ImageList;
