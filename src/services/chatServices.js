import Axios from 'react-native-axios';
import { MESSAGE } from '../api/url';

export const sendMessage = (jwt, data) => {
    return Axios({
        url: MESSAGE,
        method:"post",
        data,
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
    .then(res => res)
    .catch(err => { return { status: 400, message:"Error al enviar el mensaje" } })
}

export const _getMessages = (jwt, carrera) => {
   return Axios.get(`${MESSAGE}/?carrera=${carrera}`,{
       headers:{
           Authorization: `Bearer ${jwt}`
       }
   })
    .then(res => res)
    .catch(err => { return { status: 400, message: "Erros al capturar los mensajes" } })
}