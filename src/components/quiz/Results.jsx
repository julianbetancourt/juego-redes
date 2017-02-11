import React from 'react';

class Results extends React.Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'El profe Jhon debe estar orgulloso de tí!';
    } else if (percent < 80 && percent > 60) {
      var message = 'Aún te hace falta más estudio!';
    } else {
      var message = 'Sabes que puedes hacerlo mejor, pónte a estudiar!';
    }
    var url = window.location.href;
    return (
      <div className="well">
        <h4>Obtuviste {this.props.score} de {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
        <a className="btn btn-primary" href={url}>Reiniciar</a>
      </div>
    );
  }
}

export default Results;
