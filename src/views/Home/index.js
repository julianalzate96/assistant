import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
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
import {QuestionsContext} from '../../context/context';
import QuestionAlert from '../../components/questionAlert';

function Home(props) {
  const [questions, setQuestions] = useState([]);
  const [option, setOption] = useState(1);

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
      .filter(question => question.user.username === 'admin')
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
      .filter(question => question.user._id === props.user.user._id)
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
      .filter(question => question.user.carrera === props.user.user.carrera._id)
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
