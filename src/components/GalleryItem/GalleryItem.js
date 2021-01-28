import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';
import './GalleryItem.css';

//MATERIAL-UI imports
import { Button } from '@material-ui/core';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  handleLikes = (event) => {
    this.props.likeCallBack(this.props.item.id);
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
        <p className="description">{this.props.galleryItem.description}</p>
      );
    }
    return (
      <div className="container">
        <div>
          <div onClick={this.togglePic}>{galleryItem}</div>
        </div>

        <Button onClick={this.handleLikes} variant="contained">
          LIKE
        </Button>
        <span> {this.props.galleryItem.likes} likes</span>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GalleryItem);
