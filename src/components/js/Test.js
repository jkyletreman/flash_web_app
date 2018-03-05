import React from 'react'
import Rectangle from './Rectangle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar'



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
  answer1: {
    gridRow: '2',
    gridColumn: '1',
    marginTop: '4%'
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
      }
    }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      const clickFX = {...this.state.clickFX}
      clickFX.display = 'block'
      this.setState({clickFX: clickFX})
    }

  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
      <div style={grid.container}>
        <Rectangle
          onClick={this.handleClick}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.white}
          grid={grid.question}
          text={'Question?'}
        />
        <Rectangle
          onClick={this.handleClick}
          // State
          fx={this.state.clickFX}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.blue}
          grid={grid.answer1}
          text={'Choice #1'}
        />
        <Rectangle
          onClick={this.handleClick}
          // State
          fx={this.state.clickFX}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.green}
          grid={grid.answer2}
          text={'Choice #2'}/>
      </div>
      <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
    </React.Fragment>
  </MuiThemeProvider>)
  }
}
