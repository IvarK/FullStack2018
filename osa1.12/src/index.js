import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.title}</button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: []
    }
    anecdotes.map( a => this.state.pisteet.push(0))
  }

  randomAnecdote() {
    return () => {
      this.setState({ selected: Math.round(Math.random() * (anecdotes.length - 1))})
    }
  }

  voteAnecdote() {
    return () => {
      let temp = {...this.state}
      temp.pisteet[temp.selected]++
      this.setState(temp)
    }
  }

  getMostAnecdoteScore() {
    return Math.max.apply(Math, this.state.pisteet)
  }

  getBestAnecdote() {
    return anecdotes[this.state.pisteet.indexOf(this.getMostAnecdoteScore())]
  }



  render() {
    return (
      <div>
        <Button title={"Press for anecdotes!"} click={this.randomAnecdote()}/>
        <Button title={"Vote"} click={this.voteAnecdote()}/>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>This anecdote has {this.state.pisteet[this.state.selected]} votes.</p>
        <h1>Anecdote with most votes:</h1>
        <p>{this.getBestAnecdote()}</p>
        <p>With {this.getMostAnecdoteScore()} votes.</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)