const initialState = {status: false, answers: [], idQuestion: ''};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTION_INFO':
      return (state = action.payload);
    case 'SET_NEW_ANSWER':
      return {
        ...state,
        answers: [...state.answers, {
          _id: action.payload._id,
          descripcion: action.payload.descripcion,
          createdAt: action.payload.createdAt,
          pregunta:  action.payload.pregunta._id,
          user: action.payload.user._id,
          imagen: action.payload.imagen
        }]
      };
    default:
      return state;
  }
};

export default questionReducer;
