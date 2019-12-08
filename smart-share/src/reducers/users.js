import _ from 'lodash';

const pairs = {
  ADD_NEW_USER: (state, action) => ([...state, {name: `User${state.length + 1}`, selected: []}]),
  ADD_ONE_ITEM: (state, action) => {
    let copy = _.cloneDeep(state);
    const userList = copy[action.payload.userId];
    if (userList.selected.includes(action.payload.itemId)) {
      copy[action.payload.userId].selected = userList.selected.filter(item => item !== action.payload.itemId);
    } else {
      copy[action.payload.userId].selected.push(action.payload.itemId);
    }
    return copy;
  },
  ADD_ALL_ITEMS: (state, action) => {
    
  }
}

export default pairs;
