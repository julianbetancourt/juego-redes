import React from 'react';

class BoxScore extends React.Component {
  render() {
    return(
      <div className="well">
        Pregunta {this.props.current} de {this.props.questions.length}
      </div>
    );
  }
}

export default BoxScore;
