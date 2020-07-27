import Axios from 'react-native-axios';
import {TYPE_OF_SUBJECTS, DOCUMENT, UPLOAD} from '../api/url';

const getTypeOfSubjects = () => {
  return Axios.get(TYPE_OF_SUBJECTS)
    .then(res => res)
    .catch(err => {
      console.log('ERROR: ', err);
      alert(JSON.stringify(err));
    });
};

const uploadDocument = async (jwt, body, file) => {
  const data = new FormData();

  await Axios({
    url: DOCUMENT,
    method: 'post',
    data: body,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then(async res => {
      data.append('files', file);
      data.append('refId', res.data._id);
      data.append('ref', 'documento');
      data.append('field', 'documento');

      return fetch(UPLOAD, {
        method: 'post',
        body: data,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then(res => res)
        .catch(err => {
          return {status: 400, message: 'Errros al subir el documento.'};
        });
    })
    .catch(err => ({status: 500, message: 'Error creando el documento'}));
};

const getDocuments = (jwt, materia) => {
  return Axios.get(`${DOCUMENT}/?tipo_materia=${materia}`,{
    headers:{
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(res => res)
    .catch(err => {
      console.log('ERROR: ', err);
      alert(JSON.stringify(err));
      return { status:400, message:"Error al capturar los documentos." }
    });
}

export {getTypeOfSubjects, uploadDocument, getDocuments};
