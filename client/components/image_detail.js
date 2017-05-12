import React from 'react';

const ImageDetail = (props) => {
  // Parent to Child communication handled via props
  // props.picture => this is the picture object
  // props.picture.title
  // props.picture.link

  return (
    <li className="list-group-item media">
      <div className="media-left">
        <img src={props.picture.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.picture.title}
        </h4>
      </div>
    </li>
  );
};

export default ImageDetail;
