import React from 'react'
import Rectangle from './Rectangle'

// positioning to pass each rendered component
const grid = {
  container: {
    display: 'grid',
    margin: '0 auto',
    maxWidth: '70%',
  },
  question: {
    gridRow: '1',
    gridColumn: '1',
  },
  answer: {
    gridRow: '2',
    gridColumn: '1',
    marginTop: '4%',
  }
}

export default class Train extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      // opacity: '0.8'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleClick() {
    this.setState({display: 'block'})
  }
  handleMouseEnter() {
    // this.setState({opacity: '1'})
  }
  handleMouseLeave(){
    // this.setState({opacity: '0.8'})
  }
  render() {
    return (
      <div style={grid.container}>
        {/* Question */}
        <Rectangle
          //Events
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          // State
          // fx={this.state}
          // Props & Style
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.question}
          style={this.props.colors.white}
          text={'Question?'}
        />
        {/* Answer */}
        <Rectangle
          fx={this.state}
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.answer}
          style={this.props.colors.blue}
          text={'Answer!'}
        />
      </div>
    )
  }
}
