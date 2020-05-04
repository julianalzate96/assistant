export const setUser = payload => {
    return {
        type:"SET_USER",
        payload
    }
}

export const _setQuestionInfo = payload => {
    return {
        type:"SET_QUESTION_INFO",
        payload
    }
}

export const _setNewAnswerInQuestionInfo = payload => {
    return {
        type:"SET_NEW_ANSWER",
        payload
    }
}