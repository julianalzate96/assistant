const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return (state = action.text);
    default:
      return state;
  }
};

export default filterReducer
