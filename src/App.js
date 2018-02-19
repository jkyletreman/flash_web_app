import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Start from './components/js/Start' 
// import NavPage from './components/js/NavPage'
// import Train from './components/js/Train'
// import Test from './components/js/Test'
// import Create from './components/js/Create'
// import AnimationTest from './components/js/AnimationsTest'

const colors = {
  pink: {
    backgroundColor: 'rgb(252, 152, 218)',
    border: '5px solid white',
    color: 'white',
  },
  teal: {
    backgroundColor: 'rgb(125, 188, 241)',
    border: '5px solid white',
    color: 'white',
  },
  green: {
    backgroundColor: 'rgb(131, 201, 228)',
    border: '5px solid white',
    color: 'white',
  },
  blue: {
    backgroundColor: 'rgb(120, 141, 214)',
    border: '5px solid white',
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    border: '5px solid black',
    color: 'black',
  },
  iconGreyStyle: {
    color: 'rgb(105, 105, 105)',
    fontSize: '36px'
  },
  iconWhiteStyle: {
    color: 'white'
  }
}
const spacing = {
  paddingTop: '10%'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.combineStyleObjects = this.combineStyleObjects.bind(this)
  }
  // combines multiple 1 level objects for inline style
  combineStyleObjects(...params) {
    var resultObject = params.reduce((result, currentObject) => {
      for(var key in currentObject) {
          if (currentObject.hasOwnProperty(key)) {
              result[key] = currentObject[key];
          }
      }
      return result;
    }, {});
    return resultObject
  }
  /*
  Each Page takes
  # combineStyleObjects function
  # full colors obj -L2 with matching borders + Icon styling
  */
  render() {
    return (
      // <MuiThemeProvider>
        <div style={spacing} className="App">
          <Start colors={colors}/>
        {/* <NavPage colors={colors}
        combineStyleObjects={this.combineStyleObjects}/> */}
        {/* <AnimationTest
          combineStyleObjects={this.combineStyleObjects}
          colors={colors} /> */}
          {/* <Create colors={colors} /> */}
          {/* <Train colors={colors} /> */}
          {/* <Test colors={colors} /> */}
        </div>
      // </MuiThemeProvider>
    )
  }
}

export default App;
