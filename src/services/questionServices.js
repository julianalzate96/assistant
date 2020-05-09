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
