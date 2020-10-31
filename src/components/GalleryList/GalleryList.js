import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const listItems = this.props.list.map((item) => {
      return <GalleryItem item={item} />;
    });
    return <div>{listItems}</div>;
  }
}

export default GalleryList;
