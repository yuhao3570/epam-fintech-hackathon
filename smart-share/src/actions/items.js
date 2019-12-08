const setItems = items => ({
  type: 'SET_ITEMS',
  payload: {
    items
  }
});

const getItemsInfo = () => ({
  type: 'GET_ITEMS_INFO'
});

export default {
  setItems,
  getItemsInfo
}
