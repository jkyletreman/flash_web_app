import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircleSmall from './CircleSmall'
import CircleLarge from './CircleLarge'
import Icon from './Icon'

const grid = {
  container: {
    display: 'grid',
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
  },
  IconContainer: {
    display: 'grid'
  },
  IconLeft: {
    gridRow: '1',
    gridColumn: '1',
    margin: '0 auto'
  },
  IconRight: {
    gridRow: '1',
    gridColumn: '2',
    margin: '0 auto'
  }
}


export default class NavPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   }
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
            <CircleSmall
              combineStyleObjects={this.props.combineStyleObjects}
              color={this.props.colors.teal}
              grid={grid.top}
              text={'Create'}
            />
            <CircleLarge
              combineStyleObjects={this.props.combineStyleObjects}
              color={this.props.colors.blue}
              grid={grid.left}
              text={'Train'}
            />
            <CircleLarge
              combineStyleObjects={this.props.combineStyleObjects}
              color={this.props.colors.pink}
              grid={grid.right}
              text={'Test'}
            />
            <CircleSmall
              combineStyleObjects={this.props.combineStyleObjects}
              color={this.props.colors.green}
              grid={grid.bottom}
              text={'Results'}
            />
          </div>
        <div style={this.props.combineStyleObjects(grid.IconContainer, {paddingTop: '20%'})}>
          <Icon colors={this.props.colors} text={'school'} grid={grid.IconLeft} />
          <Icon colors={this.props.colors} text={'person_pin'} grid={grid.IconRight} />
        </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
