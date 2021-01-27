import React, { Component } from 'react';
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
    //variable for property coming over from GalleryList
    const prop = this.props.item;
    let galleryItem = <img src={prop.path} alt={prop.description} />;
    if (this.state.isClicked) {
      galleryItem = <p className="description">{prop.description}</p>;
    }
    return (
      <div className="container" key={prop.id}>
        <div>
          <div onClick={this.togglePic}>{galleryItem}</div>
        </div>

        <Button onClick={this.handleLikes} variant="contained">
          LIKE
        </Button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
