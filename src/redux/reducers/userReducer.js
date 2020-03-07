const initialState = { jwt: "JWT", data: { name: 0, lastname:0 }}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_NAME": return {
            ...state,
            data: { ...state.data, name: state.data.name + action.payload }
        }
        case "SET_LASTNAME": return {
            ...state,
            data: { ...state.data, lastname: state.data.lastname + action.payload }
        }
        default: return state
    }
}

export default userReducer