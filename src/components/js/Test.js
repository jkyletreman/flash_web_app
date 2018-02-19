import React from 'react'
import Rectangle from './Rectangle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const grid = {
  back: {
    gridRow: '1',
    gridColumn: '2',
    maxWidth: '65%'
  },
  container: {
    display: 'grid',
    maxWidth: '60%',
    paddingLeft: '15%'
  },
  question: {
    gridRow: '2',
    gridColumn: '1',
  },
  answer1: {
    gridRow: '1',
    gridColumn: '2',
  },
  answer2: {
    gridRow: '3',
    gridColumn: '2',
  },
  IconLeft: {
    gridRow: '4',
    gridColumn: '1'
  },
  IconRight: {
    gridRow: '4',
    gridColumn: '2'
  },
  IconBack: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '70%'
  }
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
      <div style={grid.container}>
        <Rectangle
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.white}
          grid={grid.question}
          text={'Question?'}
        />
        <Rectangle
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.blue}
          grid={grid.answer1}
          text={'Choice #1'}
        />
        <Rectangle
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.green}
          grid={grid.answer2}
          text={'Choice #2'}/>
      </div>
    </React.Fragment>
  </MuiThemeProvider>)
  }
}
