import React, { Component } from 'react';

import Tag from '../../../components/TagsAndItems/components/Tag/Tag';

export default class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div className="TagsPage">
        <h1>Tags</h1>
        <div className="Tags">
          <Tag name="bug">Bug</Tag>
          <Tag name="feature">Feature</Tag>
        </div>
      </div>
    );
  }
}
