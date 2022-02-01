import React from 'react';

function PhotoCard(props) {
  return (
    <div >
      <img src={props.img} alt=""  />
      <p className="photographer-name">{props.photographer}</p>
    </div>
  )
}

export default PhotoCard;
