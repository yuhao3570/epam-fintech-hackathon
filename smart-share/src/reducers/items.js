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
    selected.map((oneUser, index) => {
      oneUser.selected.map(item => {
        copy[item].count = copy[item].count + 1;
      });
    });
    return copy;
  }
}

export default pairs;
