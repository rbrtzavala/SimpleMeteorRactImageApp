// Create Image List component
import React from 'react';

import ImageDetail from './image_detail';

// const IMAGES = [
//   { title: 'Pen', link: 'https://dummyimage.com/600x400/fc00fc/00ff99' },
//   { title: 'Pine Tree', link: 'https://dummyimage.com/600x400/fc00fc/00ff99' },
//   { title: 'Mug', link: 'https://dummyimage.com/600x400/fc00fc/00ff99'}
// ];

// Create component
const ImageList = (props) => {
  // Reject images where is_albium = false.
  const validImages = props.pictures.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>
    <ImageDetail key={image.title} picture={image} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export component
export default ImageList;
