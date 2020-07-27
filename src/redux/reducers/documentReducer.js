const documentReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return (state = action.id);
      default:
        return state;
    }
  };
  
  export default documentReducer
  