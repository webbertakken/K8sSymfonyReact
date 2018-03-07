import React, { Component } from 'react';

export default class ImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: 'true', ...props };
  }

  componentDidMount() {
    this.isLoaded(true);
  }

  isLoaded(bool) {
    if (bool === true) {
      this.setState({ loading: 'false' });
    } else {
      this.setState({ loading: 'true' });
    }
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
