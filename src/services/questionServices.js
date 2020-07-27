import Axios from 'react-native-axios';
import {QUESTIONS} from '../api/url';

export const getQuestions = (idUser, jwt) => {
  return Axios.get(QUESTIONS, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then(res => res)
    .catch(err => console.log(err));
};

export const createQuestion = (jwt, data) => {
  return Axios({
    method: 'post',
    url: QUESTIONS,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    data,
  })
    .then(res => res)
    .catch(err => {
      console.log(err);
      return {status: 400, message: 'Error al Subir la Pregunta.'};
    });
};
