import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';
import './GalleryItem.css';

//MATERIAL-UI imports
import { Button, Typography, Grid } from '@material-ui/core';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  handleLikes = (event) => {
    this.props.likeCallBack(this.props.item.id);
  };

  handleDelete = (e) => {
    this.props.dispatch({
      type: 'DELETE_IMAGE',
      payload: this.props.galleryItem.id,
    });
  };

  togglePic = (event) => {
    if (this.state.isClicked === false) {
      this.setState({
        isClicked: true,
      });
    } else {
      this.setState({
        isClicked: false,
      });
    }
  };

  render() {
    let galleryItem = (
      <img
        src={this.props.galleryItem.path}
        alt={this.props.galleryItem.description}
      />
    );
    if (this.state.isClicked) {
      galleryItem = (
        <Typography className="description">
          {this.props.galleryItem.description}
        </Typography>
      );
    }
    return (
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <div>
          <div onClick={this.togglePic}>{galleryItem}</div>
        </div>

        <Button onClick={this.handleLikes} variant="contained">
          LIKE
        </Button>
        <span> {this.props.galleryItem.likes} likes</span>
        <Button variant="contained" onClick={this.handleDelete}>
          Delete
        </Button>
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(GalleryItem);
