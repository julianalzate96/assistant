import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
import {uploadDocument} from '../../services/documentServices';
import DocumentPicker from 'react-native-document-picker';
import {SvgXml} from 'react-native-svg';
import {DOCUMENT} from '../../assets/svgs';

export default function FormAddDocument(props) {
  const [document, setDocument] = useState({
    status: false,
    name: '',
    uri: '',
    type: '',
    size: '',
  });

  const [title, setTitle] = useState("")

  const onSearchDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setDocument({
        status: true,
        name: res.name,
        uri: res.uri,
        type: res.type,
        size: res.size,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const onUploadDocument = async () => {
    await uploadDocument(
      props.user.jwt,
      {
        titulo: title,
        tipo_materia: props.document,
        user: props.user.user.id,
        tipo_documento: '5e8fd207ee830cc72d9dd999',
      },
      {
        uri: document.uri,
        name: title,
        type: document.type,
      },
    ).then(res => props.toggleModal());
  };

  return (
    <View>
      <Modal
        isVisible={true}
        backdropOpacity={0}
        onBackdropPress={() => {
          props.toggleModal();
        }}
        coverScreen
        animationIn="zoomInUp"
        animationOut="zoomOutUp">
        <View style={styles.modal}>
          <View style={{flex: 3}}>
            <Text style={styles.title}>Subir Documento</Text>
            <Text style={styles.subtitle}>Titulo</Text>
            <Text>ej: Parcial1_Matematicas_Gabriel_Angel</Text>
            <TextInput
              style={styles.input}
              placeholder="Titulo"
              onChangeText={text => setTitle(text)}
            />
            <Text style={styles.subtitle}>Tipo Documento</Text>
            <Text>ej: Parcial, Quiz, Taller, etc</Text>
            <TextInput
              style={styles.input}
              placeholder="Tipo de documento"
              onChangeText={text => setQuestion(text)}
            />
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            {document.status && (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <SvgXml height={70} width={70} xml={DOCUMENT} />
                <Text>{document.name}</Text>
              </View>
            )}
          </View>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Button
              title="BUSCAR ARCHIVO"
              color="gray"
              onPress={onSearchDocument}
            />
            <Button
              title="SUBIR"
              color="#33C1FF"
              onPress={onUploadDocument}
              disabled={!document.status}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '70%',
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    maxHeight: 150,
    marginBottom: '5%',
  },
});
