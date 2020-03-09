import Axios from "react-native-axios"
import { LOGIN } from "../api/url"

export const _login = user => {
    return Axios.post(LOGIN, user)
    .then(res => res)
    .catch(err => err)
}