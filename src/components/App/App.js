import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

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

  //POST route to change the amount of likes of a photo in gallery
  changeLikes(likes) {
    axios({
      method: 'PUT',
      url: '/gallery/like/:id',
      data: likes,
    })
      .then((response) => {
        //GET the updated info
        this.getPhotos();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errMsg: 'Could not update your likes',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>My Gallery</p>
        <GalleryList list={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
