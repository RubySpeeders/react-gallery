import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    //variable for property coming over from GalleryList
    const prop = this.props.item;
    return (
      <div>
        <dt>
          <img src={prop.path} alt={prop.description} />
        </dt>
        <dt>{prop.description}</dt>
        <button>LIKE</button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
