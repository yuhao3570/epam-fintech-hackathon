import { combineReducers } from 'redux';

import peopleCount from 'reducers/peopleCount';
import items from 'reducers/items';
import users from 'reducers/users';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}


const rootReducer = combineReducers({
  peopleCount: (state = [], action) => setReducer(state, action, peopleCount),
  items: (state = [], action) => setReducer(state, action, items),
  users: (state = [], action) => setReducer(state, action, users),
});

export default rootReducer;
