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
      },
      hoverFX: {
        opacity: '0.8',
        border: '5px solid black'
      }
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter() {
    const mouseEnterFX = {...this.state.hoverFX}
    mouseEnterFX.opacity = '1'
    mouseEnterFX.border = '5px solid red'
    this.setState({hoverFX: mouseEnterFX})
  }
  handleMouseLeave() {
    const mouseLeaveFX = {...this.state.hoverFX}
    mouseLeaveFX.opacity = '0.8'
    mouseLeaveFX.border = '5px solid black'
    this.setState({hoverFX: mouseLeaveFX})
  }

  render() {
    return (
      <div
        // Events
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.onClick}
        // Styling & effects
        style={this.props.combineStyleObjects(
        this.state.rectangle,
        this.props.style,
        this.props.grid,
        // effects
        this.state.hoverFX,
        this.props.fx
      )}>

        <p>{this.props.text}</p>
      </div>
    )
  }
}
