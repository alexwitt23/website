import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';


function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

const Photos = ({photos, title}) => {
  return (
    <div>
      <h2>Photos</h2>
      <Gallery photos={photos} direction={'column'} columns={columns} />
    </div>
  );
}

export default Photos;