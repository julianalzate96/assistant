import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Layout from '../../components/layout';
import {connect} from 'react-redux';
import NavBar from '../../components/navBar';
import {getQuestions} from '../../services/questionServices';
import Question from '../../components/question/question';
import {ScrollView} from 'react-native-gesture-handler';
import QuestionInfo from '../../components/question/modal/questionInfo';
import {newAnswer} from '../../api/socket';
import {
  _setQuestionInfo,
  _setNewAnswerInQuestionInfo,
} from '../../redux/actions/actionCreator';

function Home(props) {
  const [questions, setQuestions] = useState([]);
  // const [questionInfo, setQuestionInfo] = useState({
  //   status: false,
  //   answers: [],
  // });

  useEffect(() => {
    async function getAllQuestions() {
      let res = await getQuestions(props.user.user._id, props.user.jwt);

      if (res.status === 200) {
        setQuestions(res.data);
      } else {
        alert('Error  al consultar las preguntas');
      }
    }

    newAnswer(async data => {
      props.setNewAnswer(data);
      await getAllQuestions();
    });

    getAllQuestions();
  }, []);

  return (
    <Layout navigation={props.navigation} title="preguntas">
      <NavBar />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <QuestionInfo
          toggleModal={() =>
            props.setQuestionInfo({status: false, answers: [], idQuestion: ''})
          }
        />
        {questions.map((question, i) => {
          return (
            <Question
              key={i}
              question={question}
              setQuestionInfo={() =>
                props.setQuestionInfo({
                  status: true,
                  answers: question.respuestas,
                  idQuestion: question._id,
                })
              }
            />
          );
        })}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '95%',
    paddingTop: '5%',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
    questionInfo: state.question,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({type: 'SET_NAME', payload: name});
    },
    setLastName: name => {
      dispatch({type: 'SET_LASTNAME', payload: name});
    },
    setQuestionInfo: data => {
      dispatch(_setQuestionInfo(data));
    },
    setNewAnswer: answer => {
      dispatch(_setNewAnswerInQuestionInfo(answer));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
