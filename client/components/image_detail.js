import React from 'react';

const ImageDetail = (props) => {
  // Parent to Child communication handled via props
  // props.picture => this is the picture object
  // props.picture.title
  // props.picture.link

  return (
    <li>
      <img src={props.picture.link} />
      {props.picture.title}
    </li>
  );
};

export default ImageDetail;
