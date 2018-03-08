import React from 'react'
import NavBar from './NavBar'
const style = {
  margin: '0 auto',
  marginTop: '10%',
  display: 'grid',
  maxWidth: '40%',
  paddingBottom: '5%'
}
const grid = {
  oneL: {
    gridRow: '1',
    gridColumn: '1',
    maxWidth: '30%'
  },
  oneR: {
    gridRow: '1',
    gridColumn: '2',
  },
  twoL: {
    gridRow: '2',
    gridColumn: '1',
    maxWidth: '30%'
  },
  twoR: {
    gridRow: '2',
    gridColumn: '2',
  },
  button: {
    display: 'flex',
    margin: '0 auto',
  }
}

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async createCard({question, answer}) {
    const response = await fetch("http://localhost:8000/create", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question,
        answer
      })
    })
    // const json = await response.json()
    this.setState({question: '', answer: ''})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.createCard(this.state);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
      <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <div style={style}>
              <label style={grid.oneL}>Question</label>
              <input
                style={grid.oneR}
                type='text'
                name="question"
                onChange={this.handleChange}
                value={this.state.question}
              />

              <label style={grid.twoL}>Answer</label>
              <input
                style={grid.twoR}
                type='text'
                name="answer"
                onChange={this.handleChange}
                value={this.state.answer}
              />
            </div>
            <input style={grid.button} type='submit' value='Add a Card' />
          </form>


          <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
      </React.Fragment>)
  }
}
