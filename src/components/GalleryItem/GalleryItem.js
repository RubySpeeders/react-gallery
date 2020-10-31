import React, { Component } from 'react';

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
    if (this.state.isClicked === true) {
      galleryItem = <p>{prop.description}</p>;
    }
    return (
      <div key={prop.id}>
        <div className="whatever">
          <div onClick={this.togglePic}>{galleryItem}</div>
        </div>
        {/* <img src={prop.path} alt={prop.description} onClick={this.togglePic} />
        <p>{prop.description}</p> */}
        <button onClick={this.handleLikes}>LIKE</button>
        <span> {prop.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
