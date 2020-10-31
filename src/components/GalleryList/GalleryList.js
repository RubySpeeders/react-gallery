import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const listItems = this.props.list.map((item) => {
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
    });
    return <div>{listItems}</div>;
  }
}

export default GalleryList;
