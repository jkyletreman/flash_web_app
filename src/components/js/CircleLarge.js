import React from 'react'

//this class takes as props:
// # a color in the form of the props.style
// # a grid position
// # text to display

export default class CircleSmall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleLarge: {
        borderRadius: '50%',
        color: 'white',
        fontWeight: '700',
        fontSize: '28px',
        height: '160px',
        margin: '0 auto',
        textAlign: 'center',
        width: '160px'
      }
    }
  }
    render() {
      return (
        <div style={this.props.grid}>
          <div style={this.props.combineStyleObjects(this.state.circleLarge, this.props.color, this.props.grid)}>
            <p style={{paddingTop: '20%'}}>{this.props.text}</p>
          </div>
        </div>
      )
    }
  }
