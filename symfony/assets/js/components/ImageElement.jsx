import React, { Component } from 'react';

export default class ImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: 'true', ...props };
  }

  componentDidMount() {
    this.setState({ loading: 'false' });
  }

  render() {
    const { loading, image, alt } = this.state;
    return (
      <div>
        <span>Loading: {loading}</span>
        <br />
        <img src={image} alt={alt} />
      </div>
    );
  }
}
