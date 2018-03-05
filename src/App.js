import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Start from './components/js/Start'
import NavPage from './components/js/NavPage'
import Train from './components/js/Train'
import Test from './components/js/Test'
import Create from './components/js/Create'
// import AnimationTest from './components/js/AnimationsTest'

const colors = {
  pink: {
    backgroundColor: 'rgb(252, 152, 218)',
    border: '5px solid white',
    color: 'white'
  },
  teal: {
    backgroundColor: 'rgb(125, 188, 241)',
    border: '5px solid white',
    color: 'white'
  },
  green: {
    backgroundColor: 'rgb(131, 201, 228)',
    border: '5px solid white',
    color: 'white'
  },
  blue: {
    backgroundColor: 'rgb(120, 141, 214)',
    border: '5px solid white',
    color: 'white'
  },
  white: {
    backgroundColor: 'white',
    border: '5px solid black',
    color: 'black'
  },
  right: {
    backgroundColor: 'rgb(70, 145, 91)',
    border: '5px solid white',
    color: 'white'
  },
  wrong: {
    backgroundColor: 'rgba(230, 102, 80, 0.82)',
    border: '5px solid black',
    color: 'black'
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
  margin: '0 auto',
  marginTop: '5%'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.combineStyleObjects = this.combineStyleObjects.bind(this)
    this.getTextValue = this.getTextValue.bind(this)

    this.state = {
      isRendering: false
    }
  }
  getTextValue(e) {
    this.setState({isRendering: e.target.innerText})
    console.log('hello')
  }
  // combines multiple 1 level objects into a single object for inline style
  combineStyleObjects(...params) {
    var resultObject = params.reduce((result, currentObject) => {
      for (var key in currentObject) {
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
    return (<React.Fragment>
      <Router>
        <div style={spacing} className="App">
          {/* <Start colors={colors}/> */}
          <Switch>
            <Route exact="exact" path='/' render={() => <NavPage getTextValue={this.getTextValue} colors={colors} combineStyleObjects={this.combineStyleObjects}/>}/>
            <Route path='/create' render={() => <Create colors={colors}/>}/>
            <Route path='/train' render={() => <Train colors={colors} combineStyleObjects={this.combineStyleObjects}/>}/>
            <Route path='/test' render={() => <Test colors={colors} combineStyleObjects={this.combineStyleObjects}/>}/>
          </Switch>
        </div>
      </Router>
    </React.Fragment>)
  }
}

export default App;
{/* <AnimationTest combineStyleObjects={this.combineStyleObjects} colors={colors}/> */
}
