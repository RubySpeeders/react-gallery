import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    //variable for property coming over from GalleryList
    const prop = this.props.item;
    return (
      <div key={item.id}>
        <img src={prop.path} alt={prop.description} />
        <p>{prop.description}</p>
        <button>LIKE</button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
