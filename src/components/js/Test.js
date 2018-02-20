import React from 'react'
import Rectangle from './Rectangle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const grid = {
  container: {
    display: 'grid',
    margin: '0 auto',
    maxWidth: '70%',
  },
  question: {
    gridRow: '2',
    gridColumn: '1',
    marginTop: '4%'
  },
  answer1: {
    gridRow: '1',
    gridColumn: '1',
  },
  answer2: {
    gridRow: '3',
    gridColumn: '1',
    marginTop: '4%'
  }
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickFX: {
        display: 'none'
      },
      hoverFX: {
        opacity: '0.8'
      }
    }
      this.handleClick = this.handleClick.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }
    handleClick() {
      const clickFX = {...this.state.clickFX}
      clickFX.display = 'block'
      this.setState({clickFX: clickFX})
    }
    handleMouseEnter() {
      const mouseEnterFX = {...this.state.hoverFX}
      mouseEnterFX.opacity = '1'
      this.setState({hoverFX: mouseEnterFX})
    }
    handleMouseLeave(){
      const mouseLeaveFX = {...this.state.hoverFX}
      mouseLeaveFX.opacity = '0.8'
      this.setState({hoverFX: mouseLeaveFX})
    }

  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
      <div style={grid.container}>
        <Rectangle
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          // State
          fx={this.state.hoverFX}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.white}
          grid={grid.question}
          text={'Question?'}
        />
        <Rectangle
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          // State
          fx={this.props.combineStyleObjects(this.state.hoverFX, this.state.clickFX)}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.blue}
          grid={grid.answer1}
          text={'Choice #1'}
        />
        <Rectangle
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          // State
          fx={this.props.combineStyleObjects(this.state.hoverFX, this.state.clickFX)}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.green}
          grid={grid.answer2}
          text={'Choice #2'}/>
      </div>
    </React.Fragment>
  </MuiThemeProvider>)
  }
}
