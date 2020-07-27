import React, {useState, useEffect} from 'react';
import ArrowHeader from '../../components/ArrowHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Document from '../../components/document';
import SearchBar from '../../components/searchBar';
import AddButton from '../../components/addButton';
import {getDocuments} from '../../services/documentServices';
import {connect} from 'react-redux';
import { newDocument } from "../../api/socket"

import FormAddDocument from './formAddDocument';

function Documents(props) {
  const [showModal, setShowModal] = useState(false);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function getDocumentPerType() {
      let res = await getDocuments(props.user.jwt, props.document);
      setDocuments(res.data);
    }

    newDocument(() => {
      getDocumentPerType();
    });

    getDocumentPerType();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ArrowHeader goBack={props.navigation.goBack} />
      <View style={{flex: 1, backgroundColor: '#F6F6F6'}}>
        <ScrollView>
          <View style={styles.searchContainer}>
            <SearchBar placeholder="Documentos" />
          </View>
          <View style={styles.body}>
            {documents.map((document, i) => {
              return <Document key={i} document={document} />;
            })}
          </View>
        </ScrollView>
      </View>
      <AddButton action={() => setShowModal(true)} />
      {showModal && (
        <FormAddDocument
          toggleModal={() => setShowModal(false)}
          user={props.user}
          document={props.document}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 100,
  },
  searchContainer: {height: 70, justifyContent: 'center', alignItems: 'center'},
});

const mapStateToProps = state => {
  return {
    user: state.user,
    document: state.document,
  };
};

export default connect(mapStateToProps)(Documents);
