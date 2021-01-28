import React, { Component } from 'react';

//MATERIAL-UI IMPORTS
import { TextField, Button } from '@material-ui/core';

class AddGalleryItem extends Component {
  state = {
    path: '',
    description: '',
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    //ADD image to the gallery
    e.preventDefault();
    this.props.dispatch({ type: 'POST_IMAGE', payload: this.state });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            variant="outlined"
            placeholder="photo url"
            onChange={this.handleInputChangeFor('path')}
          />
          <TextField
            type="text"
            variant="outlined"
            placeholder="description of photo"
            onChange={this.handleInputChangeFor('description')}
          />
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default AddGalleryItem;
