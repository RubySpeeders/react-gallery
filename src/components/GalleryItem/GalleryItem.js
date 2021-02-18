import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';
import './GalleryItem.css';
import ReactCardFlip from 'react-card-flip';

//MATERIAL-UI imports
import { Button, Typography, Grid } from '@material-ui/core';

class GalleryItem extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // state = {
  //   isClicked: false,
  // };

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  handleLikes = (event) => {
    this.props.dispatch({
      type: 'UPDATE_IMAGE_LIKES',
      payload: this.props.galleryItem.id,
    });
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
    return (
      <Grid item xs={12} md={6} lg={4} xl={3}>
        {/* <div onClick={this.togglePic}>
          {this.state.isClicked ? (
            <Typography className="description">
              {this.props.galleryItem.description}
            </Typography>
          ) : (
            <img
              src={this.props.galleryItem.path}
              alt={this.props.galleryItem.description}
            />
          )}
        </div> */}

        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <div className="card_front">
            <img
              onClick={this.handleClick}
              src={this.props.galleryItem.path}
              alt={this.props.galleryItem.description}
            />
          </div>

          <div className="card_back">
            <Typography onClick={this.handleClick} className="description">
              {this.props.galleryItem.description}
            </Typography>
          </div>
        </ReactCardFlip>

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
