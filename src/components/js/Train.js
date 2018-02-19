import React from 'react'
import Rectangle from './Rectangle'


export default class Train extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // positioning to pass each rendered component
      container: {
        display: 'grid',
        margin: '0 auto',
        maxWidth: '70%'
      },
      question: {
        gridRow: '1',
        gridColumn: '1'
      },
      answer: {
        gridRow: '1',
        gridColumn: '2'
      }
    }
  }
  render() {
    return (
      <div style={this.state.container}>
        <Rectangle grid={this.state.question} style={this.props.colors.white} text={'Question?'}/>
        <Rectangle grid={this.state.answer} style={this.props.colors.blue} text={'Answer!'} />
      </div>
    )
  }
}
