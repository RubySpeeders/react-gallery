import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  // create a local state to see if pic is clicked
  state = {
    isClicked: false,
  };

  // function to update likes
  handleLikes = (event) => {
    // using the callback function from App.js (passed through GalleryList!)
    this.props.likeCallBack(this.props.item.id);
  };

  // function to toggle if a pic or description is clicked
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
    //check if a description or pic is clicked
    if (this.state.isClicked) {
      // change the display to description if picture is clicked
      galleryItem = <p className="description">{prop.description}</p>;
    }
    return (
      <div key={prop.id}>
        <div>
          <div onClick={this.togglePic}>{galleryItem}</div>
        </div>
        <button onClick={this.handleLikes}>LIKE</button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
