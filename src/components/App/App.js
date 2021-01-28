import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';
import axios from 'axios';

//CUSTOM FILE IMPORTS
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import AddGalleryItem from '../AddGalleryItem/AddGalleryItem';

class App extends Component {
  state = {
    galleryList: [],
    errMsg: null,
  };

  //'on ready' function that loads the gallery on page load
  componentDidMount() {
    this.props.dispatch({ type: 'GET_IMAGES' });
    // this.getPhotos();
  }

  //PUT route to change the amount of likes of a photo in gallery
  changeLikes = (id) => {
    axios
      .put(`/api/gallery/like/${id}`)
      .then((response) => {
        //GET the updated like info
        this.getPhotos();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errMsg: 'Could not update your likes',
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <GalleryList
          likeCallBack={this.changeLikes}
          list={this.state.galleryList}
        />
        <AddGalleryItem />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
