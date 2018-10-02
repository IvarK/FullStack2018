import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      {props.content.map( i => { return <Osa key={i.name} name={i.name} assignments={i.assignments}/> })}
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.name} {props.assignments}</p>
  )
}

const Yhteensa = (props) => {
  const kaikkiTehtavat = () => { return props.content.reduce( (x, y) => { return x + y.assignments }, 0) }
  return (
    <p>yhteensä {kaikkiTehtavat()} tehtävää</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }
  render() {
    const kurssi = {
      name: 'Half Stack -sovelluskehitys',
      tehtavat: [{
        name: 'Reactin perusteet',
        assignments: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        assignments: 7
      },
      {
        name: 'Komponenttien tila',
        assignments: 14
      }]
    }
    return (
      <div>
        <Otsikko kurssi={kurssi.name}/>
        <Sisalto content={kurssi.tehtavat}/>
        <Yhteensa content={kurssi.tehtavat}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)