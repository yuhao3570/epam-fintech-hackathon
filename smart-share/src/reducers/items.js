const pairs = {
  SET_ITEMS: (state, action) => (action.payload.items),
  PARSE_BILL: (state, action) => (action.data),
  PARSE_BILL_ERROR: (state, action) => (action.error),
  GET_ITEMS_INFO: (state, action) => (state)
}

export default pairs;
