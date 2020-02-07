import React, { Component } from 'react';
import List from './List';
import AddListItem from './AddListItem';

class ShoppingList extends Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <List />
          </div>
          <div className="col-sm-6">
            <AddListItem />
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;