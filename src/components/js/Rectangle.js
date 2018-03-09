import React from 'react'

//this class takes as props:
// # a color in the form of the props.style
// # a grid position
// # combineStyleObjects
export default class Rectangle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rectangle: {
        borderRadius: '15%',
        height: '200px',
        width: '360px',
        textAlign: 'center',
        margin: '0 auto',
        boxShadow: '7px 5px 5px rgba(73, 74, 73, 0.49)',
        overflow: 'scroll',
      },
      hoverFX: {
        opacity: '0.8',
        border: this.props.style.border
      }
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter() {
    const mouseEnterFX = {...this.state.hoverFX}
    mouseEnterFX.opacity = '1'
    mouseEnterFX.border = '5px solid rgb(226, 197, 97)'
    this.setState({hoverFX: mouseEnterFX})
  }
  handleMouseLeave() {
    const mouseLeaveFX = {...this.state.hoverFX}
    mouseLeaveFX.opacity = '0.8'
    mouseLeaveFX.border = this.props.style.border
    this.setState({hoverFX: mouseLeaveFX})
  }
  // because the choices(test component) don't unmount (no condition rendering)
  // we need to reset the state when the rectangle recieves the new props from the clickFX
  // otherwise the state will be hanging behind the Props
  // better solution is to conditionally render and not use props in state
  componentWillReceiveProps(nextProps) {
    if (this.props.fx && this.props.fx.display === 'block') {
      this.setState({
        hoverFX: {
          opacity: '0.8',
          border: nextProps.style.border
        }
      })
    }
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
