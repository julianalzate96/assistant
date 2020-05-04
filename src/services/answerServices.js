import Axios from 'react-native-axios';
import {ANSWERS} from '../api/url';

export const createAnswer = (question, answer, userId, jwt) => {
  return Axios({
    url: ANSWERS,
    method: 'post',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    data: {
      descripcion: answer,
      user: userId,
      pregunta: question,
    },
  })
    .then(res => res)
    .catch(err => console.log(err));
};
