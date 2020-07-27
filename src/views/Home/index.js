import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, AppRegistry} from 'react-native';
import Layout from '../../components/layout';
import {connect} from 'react-redux';
import NavBar from '../../components/navBar';
import {getQuestions} from '../../services/questionServices';
import Question from '../../components/question/question';
import {ScrollView} from 'react-native-gesture-handler';
import QuestionInfo from '../../components/question/modal/questionInfo';
import {newAnswer, newQuestion} from '../../api/socket';
import {
  _setQuestionInfo,
  _setNewAnswerInQuestionInfo,
  _setFilter,
} from '../../redux/actions/actionCreator';
import {QuestionsContext} from '../../context/context';
import QuestionAlert from '../../components/questionAlert';
import App from '../../../App';
import AddButton from '../../components/addButton';
import AddQuestion from '../../components/question/addQuestion';

function Home(props) {
  const [questions, setQuestions] = useState([]);
  const [option, setOption] = useState(1);
  const [modal, setModal] = useState(false);

  const contextValue = useMemo(() => ({option, setOption}), [
    option,
    setOption,
  ]);

  useEffect(() => {
    async function getAllQuestions() {
      let res = await getQuestions(props.user.user._id, props.user.jwt);

      if (res.status === 200) {
        setQuestions(res.data);
      }
    }

    newAnswer(async data => {
      props.setNewAnswer(data);
      await getAllQuestions();
    });

    newQuestion(() => {
      getAllQuestions();
    });

    getAllQuestions();
  }, []);

  const renderQuestions = number => {
    switch (number) {
      case 1:
        return renderGeneralQuestions();
      case 2:
        return renderMyQuestions();
      case 3:
        return renderCareerQuestions();
      default:
        return <QuestionAlert />;
    }
  };

  const renderGeneralQuestions = () => {
    let arrayQuestions = questions
      .filter(
        question =>
          question.user.username === 'admin' &&
          question.descripcion.toLowerCase().indexOf(props.filter) !== -1,
      )
      .map((question, i) => {
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
      });

    if (arrayQuestions.length === 0) {
      return <QuestionAlert />;
    }

    return arrayQuestions;
  };

  const renderMyQuestions = () => {
    let arrayQuestions = questions
      .filter(
        question =>
          question.user._id === props.user.user._id &&
          question.descripcion.toLowerCase().indexOf(props.filter) !== -1,
      )
      .map((question, i) => {
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
      });

    if (arrayQuestions.length === 0) {
      return <QuestionAlert />;
    }

    return arrayQuestions;
  };

  const renderCareerQuestions = () => {
    let arrayQuestions = questions
      .filter(
        question =>
          question.user.carrera === props.user.user.carrera._id &&
          question.descripcion.toLowerCase().indexOf(props.filter) !== -1,
      )
      .map((question, i) => {
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
      });

    if (arrayQuestions.length === 0) {
      return (
        <QuestionAlert text="No hay preguntas relacionadas con tu carrera" />
      );
    }

    return arrayQuestions;
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Layout navigation={props.navigation} title="preguntas">
      <QuestionsContext.Provider value={contextValue}>
        <NavBar />
      </QuestionsContext.Provider>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <QuestionInfo
          toggleModal={() =>
            props.setQuestionInfo({status: false, answers: [], idQuestion: ''})
          }
        />
        {renderQuestions(option)}
      </ScrollView>
      {option === 2 && <AddButton action={toggleModal} />}
      {option === 2 && modal && <AddQuestion toggleModal={toggleModal} />}
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
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuestionInfo: data => {
      dispatch(_setQuestionInfo(data));
    },
    setNewAnswer: answer => {
      dispatch(_setNewAnswerInQuestionInfo(answer));
    },
    resetFilter: () => dispatch(_setFilter('')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

AppRegistry.registerComponent('Home', () => App);
