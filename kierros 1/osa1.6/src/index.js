import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Statistics from "./Statistics.js"

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.title}</button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: {
        good: 0,
        neutral: 0,
        bad: 0
      }
    }
  }

  voteFor = (vote) => {
    return () => {
      let temp = Object.assign({}, this.state.votes)
      temp[vote]++
      this.setState({votes: temp}) 
    }
  }

  render() {
    return (
      <div>
        <Header title="Anna palautetta"/>
        <Button title="hyvä" click={this.voteFor("good")}/>
        <Button title="neutraali" click={this.voteFor("neutral")}/>
        <Button title="huono" click={this.voteFor("bad")}/>
        <Header title="Statistiikka"/>
        <Statistics votes={this.state.votes}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
