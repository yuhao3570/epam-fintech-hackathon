import { combineReducers } from 'redux';

import peopleCount from 'reducers/peopleCount';
import items from 'reducers/items';
import users from 'reducers/users';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

let mockInfo = [
  {
    id: 0,
    title: 'Fish',
    count: 0
  },
  {
    id: 1,
    title: 'Beef',
    count: 0
  },
  {
    id: 2,
    title: 'Pork',
    count: 0
  },
  {
    id: 3,
    title: 'Vegetable',
    count: 0
  }
]

const rootReducer = combineReducers({
  peopleCount: (state = [], action) => setReducer(state, action, peopleCount),
  items: (state = mockInfo, action) => setReducer(state, action, items),
  users: (state = [], action) => setReducer(state, action, users),
});

export default rootReducer;
