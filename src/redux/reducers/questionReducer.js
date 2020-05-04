const initialState = {status: false, answers: [], idQuestion: ''};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTION_INFO':
      return (state = action.payload);
    case 'SET_NEW_ANSWER':
      return {
        
      };
    default:
      return state;
  }
};

export default questionReducer;
