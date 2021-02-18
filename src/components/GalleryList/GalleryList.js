import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';

//CUSTOM FILE IMPORTS
import GalleryItem from '../GalleryItem/GalleryItem';
import AddItemModal from '../AddItemModal/AddItemModal';

//MATERIAL-UI IMPORTS
import { Container, Grid, Typography } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    //map through each item in imagesReducer reducer
    const galleryItem = this.props.store.images.map((item, index) => {
      return <GalleryItem key={index} galleryItem={item} />;
    });

    return (
      <div>
        <Container>
          <Typography gutterBottom variant="h4">
            Click on a photo to see the description
          </Typography>
          <Grid container spacing={3}>
            {galleryItem}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AddItemModal />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GalleryList);
