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

export default {
  addUser,
  addNewUser,
  addOneItem
}
