import React, { Component } from 'react';

class GalleryItem extends Component {
  handleLikes = (event) => {
    this.props.callBack(this.props.item.id);
  };

  render() {
    //variable for property coming over from GalleryList
    const prop = this.props.item;
    return (
      <div key={prop.id}>
        <img src={prop.path} alt={prop.description} />
        <p>{prop.description}</p>
        <button onClick={this.handleLikes}>LIKE</button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
