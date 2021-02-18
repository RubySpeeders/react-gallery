import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/sagas/mapStoreToProps';

//CUSTOM FILE IMPORTS
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

//Material-UI imports
import { CircularProgress } from '@material-ui/core';

class App extends Component {
  state = {
    errMsg: null,
  };

  //'on ready' function that loads the gallery on page load
  componentDidMount() {
    this.props.dispatch({ type: 'GET_IMAGES' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* {!this.props.images ? (
          <CircularProgress />
        ) : (
          <GalleryList list={this.state.galleryList} />
        )} */}
        <GalleryList list={this.state.galleryList} />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
