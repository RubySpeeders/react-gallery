import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL-UI IMPORTS
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
} from '@material-ui/core';

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
          <DialogContent>
            <DialogContentText>
              To add a photo to the gallery, please put a link to a photo and a
              short description!
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="photo url"
                  onChange={this.handleInputChangeFor('path')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="description of photo"
                  onChange={this.handleInputChangeFor('description')}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" type="submit">
              Add
            </Button>
          </DialogActions>
        </form>
      </div>
    );
  }
}

export default connect()(AddGalleryItem);
