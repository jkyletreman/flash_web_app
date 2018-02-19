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
      }
    }
  }
    render() {
      return (
        <div style={this.props.grid}>
          <div
            // UI events
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            // combineStyleObjects creates a single style object here
            style={this.props.combineStyleObjects(
              this.state.circleSmall,
              this.props.color,
              this.props.grid,
              this.props.fx
            )}>

            <p style={{paddingTop: '10%'}}>{this.props.text}</p>
          </div>
        </div>
      )
    }
  }
