import React from 'react';

export default class Statistics extends React.Component {
  constructor(props) {
    super(props)
  }
  average = () => {
    let total = this.props.votes.good - this.props.votes.bad
    let allvotes = this.props.votes.good + this.props.votes.bad + this.props.votes.neutral
    if (allvotes == 0) return 0
    return (total / allvotes).toFixed(2)
  }

  positive = () => {
    let allvotes = this.props.votes.good + this.props.votes.bad + this.props.votes.neutral
    if (allvotes == 0) return "0 %"
    return (this.props.votes.good / allvotes * 100).toFixed(2) + " %"
  }
  render() {
    if (this.props.votes.good + this.props.votes.bad + this.props.votes.neutral > 0) {
      return (
        <table>
          <tbody>
            <Stat title={"Hyvä"} amount={this.props.votes.good}/>
            <Stat title={"Neutraali"} amount={this.props.votes.neutral}/>
            <Stat title={"Huono"} amount={this.props.votes.bad}/>
            <Stat title={"Keskiarvo"} amount={this.average()}/>
            <Stat title={"Positiivisia"} amount={this.positive()}/>
          </tbody>
        </table>
      )
    } else return (
      <p>Yhtään palautetta ei ole annettu</p>
    )
  }
}

const Stat = (props) => {
  return (
    <tr>
      <td>{ props.title }</td>
      <td>{ props.amount }</td>
    </tr>
  )
}