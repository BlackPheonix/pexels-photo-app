import React from 'react';

function PhotoCard(props) {
  return (
    <div >
      <img src={props.img} alt=""  />
      <p className="photographer-name">Image by: {props.photographer}</p>
    </div>
  )
}

export default PhotoCard;
