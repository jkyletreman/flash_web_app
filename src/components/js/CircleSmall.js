import React from 'react'

//this class takes as props:
// # a color in the form of the props.style
// # a grid position
// # text to display
export default class CircleSmall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSmall: {
        borderRadius: '50%',
        color: 'white',
        fontWeight: '700',
        fontSize: '28px',
        height: '120px',
        margin: '0 auto',
        textAlign: 'center',
        width: '120px'
      },
      hoverFX: {
        opacity: '0.8',
        border: this.props.color.border
    }
  }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter() {
    console.log('working')
    const mouseEnterFX = {...this.state.hoverFX}
    mouseEnterFX.opacity = '1'
    mouseEnterFX.border = '5px solid rgb(226, 197, 97)'
    this.setState({hoverFX: mouseEnterFX})
  }
  handleMouseLeave() {
    const mouseLeaveFX = {...this.state.hoverFX}
    mouseLeaveFX.opacity = '0.8'
    mouseLeaveFX.border = this.props.color.border
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
          this.state.circleSmall,
          this.props.color,
          this.props.grid,
          // effects
          this.state.hoverFX,
          this.props.fx
        )}>

        <p style={{paddingTop: '10%'}}>{this.props.text}</p>
      </div>
      )
    }
  }
