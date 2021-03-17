import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';


function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

const Photos = ({photos}) => {
  return (
    <section id="photos">
      <div>
        <Gallery photos={photos} direction={'column'} columns={columns} />
      </div>
    </section>
  );
}

export default Photos;