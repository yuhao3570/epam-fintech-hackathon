import { combineReducers } from 'redux';

import peopleCount from 'reducers/peopleCount';
import items from 'reducers/items';
import users from 'reducers/users';
import testBill from '../testData/testBill';
import TESTUSERS from '../testData/testUsers';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

const rootReducer = combineReducers({
  peopleCount: (state = 3, action) => setReducer(state, action, peopleCount),
  items: (state = testBill, action) => setReducer(state, action, items),
  users: (state = TESTUSERS, action) => setReducer(state, action, users),
});

export default rootReducer;
