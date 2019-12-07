import _ from 'lodash';

const pairs = {
  ADD_USERS: (state, action) => ([...state, action.payload.userinfo]),
  ADD_NEW_USER: (state, action) => ([...state, []]),
  ADD_ONE_ITEM: (state, action) => {
    let copy = _.cloneDeep(state);
    const userList = copy[action.payload.userId];
    if (userList.includes(action.payload.itemId)) {
      copy[action.payload.userId] = userList.filter(item => item !== action.payload.itemId);
    } else {
      copy[action.payload.userId].push(action.payload.itemId);
    }
    return copy;
  }
}

export default pairs;
