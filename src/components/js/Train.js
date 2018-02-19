import React from 'react'
import Rectangle from './Rectangle'

// positioning to pass each rendered component
const grid = {
  container: {
    display: 'grid',
    margin: '0 auto',
    maxWidth: '70%'
  },
  question: {
    gridRow: '1',
    gridColumn: '1',
    zIndex: '1'
  },
  answer: {
    gridRow: '1',
    gridColumn: '2',
    opacity: '0.0'
  }
}

export default class Train extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opacity: '0.0'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render() {
    return (
      <div style={grid.container}>
        <Rectangle
          onClick={this.handleClick}
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.question}
          style={this.props.colors.white}
          text={'Question?'}
        />
        <Rectangle
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.answer}
          style={this.props.colors.blue}
          text={'Answer!'} />
      </div>
    )
  }
}
