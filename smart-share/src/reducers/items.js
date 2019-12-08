import _ from 'lodash';

const pairs = {
  SET_ITEMS: (state, action) => (action.payload.items),
  PARSE_BILL: (state, action) => (action.data),
  PARSE_BILL_ERROR: (state, action) => (action.error),
  GET_ITEMS_INFO: (state, action) => (state),
  UPDATE_ITEM_COUNT: (state, action) => {
    let copy = _.cloneDeep(state);
    copy[action.payload.itemName].count++;
    return copy;
  },
  UPDATE_ITEM_COUNT: (state, action) => {
    let copy = _.cloneDeep(state);
    const selected = action.payload.users;
    Object.keys(selected).map(oneUser => {
      oneUser.selected.map(item => {
        copy[item].count++;
      });
    });
    return copy;
  }
}

export default pairs;
