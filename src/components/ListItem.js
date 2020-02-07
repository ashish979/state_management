import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemDescription from './ListItemDescription';

class ListItem extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { removeListItem } = this.props;
    const listItemId = this.props.item.id;

    removeListItem(listItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="card my-2">
        <div className="card-header">
          <span className="float-left">
            {item.name}
          </span>
          <span className="float-right">
          {`Quantity: ${item.quantity}`}
          </span>

        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="card-footer">
        <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="pull-right btn btn-danger">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeListItem: PropTypes.func.isRequired,
};

export default ListItem;