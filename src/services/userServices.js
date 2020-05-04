import Axios from "react-native-axios"
import { LOGIN, USERS } from "../api/url"

export const _login = user => {
    return Axios.post(LOGIN, user)
    .then(res =>res)
    .catch(err =>{
        console.log("ERROR [_login]: ", err)
        return { status: 400, msg: "Error" }
    })
}

export const _getUser = idUser => {
    return Axios.get(`${USERS}/${idUser}`)
    .then(res => res)
    .catch(err => {
        console.log("ERROR [_getUser]: ", err)
        return { status: 400, msg: "Error" }
    })
}