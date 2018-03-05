import React from 'react'
import {Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircleSmall from './CircleSmall'
import CircleLarge from './CircleLarge'
import Icon from './Icon'

const grid = {
  container: {
    display: 'grid',
    margin: '0 auto'
  },
  top: {
    gridRow: '1',
    gridColumn: '2',
  },
  left: {
    gridRow: '2',
    gridColumn: '1',
  },
  right: {
    gridRow: '2',
    gridColumn: '3',
  },
  bottom: {
    gridRow: '3',
    gridColumn: '2',
  }
}

export default class NavPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const text = this.props.getTextValue(e)
  }
/* each Circle Component requires
  # onMouseEnter && onMouseLeave event
  # effects obj (UI interactions)
  # color in for of this.props.color.****
  # grid position
  # Text
  # combineStyleObjects fx from props
  */
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div style={grid.container}>
            <Link to='/create' style={this.props.combineStyleObjects({textDecoration: 'none' }, grid.top)}>
              <CircleSmall
                combineStyleObjects={this.props.combineStyleObjects}
                color={this.props.colors.teal}
                text={'Create'}
                onClick={this.handleClick}
              />
           </Link>
           <Link to='/train' style={this.props.combineStyleObjects({textDecoration: 'none' }, grid.left)} >
              <CircleLarge
                combineStyleObjects={this.props.combineStyleObjects}
                color={this.props.colors.blue}
                text={'Train'}
                onClick={this.handleClick}
              />
            </Link>
            <Link to='/test' style={this.props.combineStyleObjects({textDecoration: 'none' }, grid.right)}>
              <CircleLarge
                combineStyleObjects={this.props.combineStyleObjects}
                color={this.props.colors.pink}
                text={'Test'}
                onClick={this.handleClick}
              />
            </Link>
            <Link to='/results' style={this.props.combineStyleObjects({textDecoration: 'none' }, grid.bottom)}>
              <CircleSmall
                combineStyleObjects={this.props.combineStyleObjects}
                color={this.props.colors.green}
                text={'Results'}
                onClick={this.handleClick}
              />
            </Link>
          </div>
      </React.Fragment>
    </MuiThemeProvider>
    )
  }
}
