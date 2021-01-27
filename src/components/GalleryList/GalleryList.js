import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';

import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    //map through each item in galleryItems reducer
    const galleryItem = this.props.store.galleryItems.map((item, index) => {
      return <GalleryItem key={index} galleryItem={item} />;
    });

    return <div>{galleryItem}</div>;
  }
}

export default connect(mapStoreToProps)(GalleryList);
