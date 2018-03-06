import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from './Icon'

const grid = {
  IconContainer: {
    display: 'grid',
    maxWidth: '60%',
    margin: '0 auto'
  },
  IconLeft: {
    gridRow: '1',
    gridColumn: '1',
    margin: '0 auto'
  },
  IconCenter: {
    gridRow: '1',
    gridColumn: '2',
    margin: '0 auto'
  },
  IconRight: {
    gridRow: '1',
    gridColumn: '3',
    margin: '0 auto'
  },
}

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    window.history.back();
  }
  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
        <div style={this.props.combineStyleObjects(grid.IconContainer, {paddingTop: '5%'})}>
          <Icon colors={this.props.colors} text={'school'} grid={grid.IconLeft}/>
          <Icon colors={this.props.colors} text={'reply'} grid={grid.IconCenter} onClick={this.handleClick}/>
          <Icon colors={this.props.colors} text={'person_pin'} grid={grid.IconRight}/>
        </div>
      </React.Fragment>
    </MuiThemeProvider>)
  }
}
