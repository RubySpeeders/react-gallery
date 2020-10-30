import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        <div>
          {this.state.galleryList.map((item) => {
            return (
              <ul key={item.id}>
                <dt>
                  <img src={item.path} alt={item.description} />
                </dt>
                <dt>{item.description}</dt>
                <button>LIKE</button>
                <span> {item.likes} likes</span>
              </ul>
            );
          })}
        </div>
        {/* <img src="images/goat_small.jpg" alt="small goat" /> */}
      </div>
    );
  }
}

export default App;
