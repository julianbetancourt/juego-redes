import React from 'react';
import BoxScore from './quiz/BoxScore.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';
import questions from '../data'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var boxscore = '';
      var results = <Results {...this.state}/>
    } else {
      var boxscore = <BoxScore {...this.state} />
      var results = '';
    }
    return (
      <div>
        {boxscore}
        <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
        {results}
      </div>
    );
  }
}

export default App;
