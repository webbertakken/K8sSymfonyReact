import React, { Component } from 'react';

import Item from '../../../components/TagsAndItems/components/Item/Item';
import Tag from '../../../components/TagsAndItems/components/Tag/Tag';

export default class Items extends Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div className="ItemsPage">
        <h1>Items</h1>
        <div className="Items">
          <Item name="item1">Nasty Bug
            <div className="Tags">
              <Tag name="bug">Bug</Tag>
            </div>
          </Item>
          <Item name="item2">Some Feature
            <div className="Tags">
              <Tag name="feature">Feature</Tag>
            </div>
          </Item>
        </div>
      </div>
    );
  }
}
