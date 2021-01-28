import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';

//CUSTOM FILE IMPORTS
import GalleryItem from '../GalleryItem/GalleryItem';

//MATERIAL-UI IMPORTS
import { Container, Grid } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    //map through each item in imagesReducer reducer
    const galleryItem = this.props.store.images.map((item, index) => {
      return <GalleryItem key={index} galleryItem={item} />;
    });

    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            {/* <p>whatever</p> */}
            {galleryItem}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GalleryList);
