import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    // use .map function to go through galleryList (sent through props from App.js)
    const listItems = this.props.list.map((item) => {
      return (
        <GalleryItem
          // send callback function through props to GalleryItem (not used on this component)
          likeCallBack={this.props.likeCallBack}
          // send key and item through props to GalleryItem
          key={item.id}
          item={item}
        />
      );
    });
    // div for the gallery items to be shown in
    return <div>{listItems}</div>;
  }
}

export default GalleryList;
