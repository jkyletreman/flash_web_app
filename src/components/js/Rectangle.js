import React from 'react'

//this class takes as props:
// # a color in the form of the props.style
// # a grid position

export default class Rectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rectangle: {
        borderRadius: '15%',
        height: '200px',
        width: '360px',
        textAlign: 'center',
        margin: '0 auto'
      }
    }
  }
  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={this.props.combineStyleObjects(
        this.state.rectangle,
        this.props.style,
        this.props.grid
      )}>

        <p>{this.props.text}</p>
      </div>
    )
  }
}
