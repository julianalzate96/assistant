const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return (state = action.payload);
    case 'RESET_USER':
      return (state = {});
    default:
      return state;
  }
};

export default userReducer;
