const setUser = payload => {
  return {
    type: 'SET_USER',
    payload,
  };
};

const _setQuestionInfo = payload => {
  return {
    type: 'SET_QUESTION_INFO',
    payload,
  };
};

const _setNewAnswerInQuestionInfo = payload => {
  return {
    type: 'SET_NEW_ANSWER',
    payload,
  };
};

const _setFilter = text => ({
  type: 'SET_FILTER',
  text,
});

export {setUser, _setQuestionInfo, _setNewAnswerInQuestionInfo, _setFilter};
