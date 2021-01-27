import React, { Component } from 'react';
import axios from 'axios';

//CUSTOM FILE IMPORTS
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

class App extends Component {
  state = {
    galleryList: [],
    errMsg: null,
  };

  //'on ready' function that loads the gallery on page load
  componentDidMount() {
    this.getPhotos();
  }

  //get Route to get all photos from the server
  getPhotos() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        //populate state with the data from the server
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errMsg: 'Could not get gallery list',
        });
      });
  }

  //PUT route to change the amount of likes of a photo in gallery
  changeLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
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
        <br />
        <p className="App-para">MY GALLERY</p>
        <GalleryList
          likeCallBack={this.changeLikes}
          list={this.state.galleryList}
        />
      </div>
    );
  }
}

export default App;
