import {ADD_ITEM, REMOVE_ALL_ITEMS, REMOVE_ITEM} from './actionTypes'
import dispatcher from "../dispatcher/dispatcher";

function addItem(item) {
  let action = {
    type: ADD_ITEM,
    item
  };
  dispatcher.dispatch(action);
}

function removeItem(id) {
  let action = {
    type: REMOVE_ITEM,
    id
  };
  dispatcher.dispatch(action);
}

function removeAllItems() {
  let action = {
    type: REMOVE_ALL_ITEMS
  };
  dispatcher.dispatch(action);
}

export {
  addItem, removeItem, removeAllItems
}
