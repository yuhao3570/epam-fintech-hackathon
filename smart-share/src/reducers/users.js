const pairs = {
  ADD_USERS: (state, action) => ([...state, action.payload.userinfo])
}

export default pairs;
