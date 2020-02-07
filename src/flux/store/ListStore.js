import EventEmitter from 'events';
import objectAssign from 'object-assign'; // polyfill for Object.assign()
import { ADD_ITEM, REMOVE_ALL_ITEMS, REMOVE_ITEM } from "../action/actionTypes";
import dispatcher from "../dispatcher/dispatcher";

let items = {

};

const ListStore = objectAssign({}, EventEmitter.prototype, {
  getListItems: function() {
    return items;
  },
  addChangeListener: function(handler) {
    this.on('change', handler);
  },
  removeChangeListener: function(handler) {
    this.removeListener(handler);
  }
});

// class ListStore extends EventEmitter {

// }

function addItem(item) {
  items[item.id] = item;
  ListStore.emit('change');
}

function removeItem(id) {
  delete items[id];
  ListStore.emit('change');
}

function removeAll() {
  items = {};
  ListStore.emit('change');
}

function handleActions(action) {
  if(action.type === ADD_ITEM) {
    addItem(action.item);
  }
  else if(action.type === REMOVE_ITEM) {
    removeItem(action.id);
  }
  else if(action.type === REMOVE_ALL_ITEMS) {
    removeAll();
  }
}

dispatcher.dispatchToken = dispatcher.register(handleActions);

export default ListStore;
