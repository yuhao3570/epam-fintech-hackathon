const addUser = userinfo => ({
  type: 'ADD_USER',
  payload: {
    userinfo
  }
});

const addNewUser = ({
  type: 'ADD_NEW_USER'
});

const addOneItem = (userId, itemId) =>({
  type: 'ADD_ONE_ITEM',
  payload: {
    userId,
    itemId
  }
});

const addAllItems = userId => ({
  type: 'ADD_ALL_ITEMS',
  payload: {
    userId
  }
});

export default {
  addUser,
  addNewUser,
  addOneItem,
  addAllItems
}
