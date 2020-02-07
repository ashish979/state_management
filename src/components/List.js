import React, { Component } from 'react';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import EmptyList from './EmptyList';
import ListStore from "../flux/store/ListStore";

class List extends Component {
  constructor(props) {
    super(props);
    this.state.items = ListStore.getListItems();
  }

  componentDidMount() {
    ListStore.addChangeListener(this.updateList.bind(this));
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this.updateList);
  }

  updateList() {
    this.setState({
      items: ListStore.getListItems()
    })
  }

  getListOfItemIds = items => Object.keys(items);

  getTotalNumberOfListItems = items => (
    this.getListOfItemIds(items).reduce((accumulator, itemId) => (
      accumulator + parseInt(items[itemId].quantity, 10)
    ), 0)
  );

  createListItemElements(items) {
    let item;

    return (
      this
      .getListOfItemIds(items)
      .map(itemId => {
        item = items[itemId];
        return (<ListItem item={item} key={item.id} />);
      })
      .reverse()
    );
  }

  render() {
    const items = this.state.items;
    const listItemElements = this.createListItemElements(items);

    return (
      <div>
        <h3>
          <ListHeader
            totalNumberOfListItems={this.getTotalNumberOfListItems(items)}
          />
        </h3>
        <ul>
          {listItemElements.length > 0 ? listItemElements : <EmptyList />}
        </ul>
      </div>
    );
  }
}

export default List;