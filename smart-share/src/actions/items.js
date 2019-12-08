const setItems = items => ({
  type: 'SET_ITEMS',
  payload: {
    items
  }
});

const getItemsInfo = () => ({
  type: 'GET_ITEMS_INFO'
});

const updateItemCount = (users) => ({
  type: 'UPDATE_ITEM_COUNT',
  payload: {
    users
  }
});

export default {
  setItems,
  getItemsInfo,
  updateItemCount
}
