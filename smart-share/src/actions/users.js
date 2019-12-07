const addUser = userinfo => ({
  type: 'ADD_USER',
  payload: {
    userinfo
  }
})

export default {
  addUser
}
