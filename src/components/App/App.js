import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryList: [],
    errMsg: null,
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>My Gallery</p>
        <GalleryList list={this.state.galleryList} />
        {/* <img src="images/goat_small.jpg" alt="small goat" /> */}
      </div>
    );
  }
}

export default App;
