import React, {Component} from 'react';
import Match from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from './Icon'

const grid = {
  IconContainer: {
    display: 'grid',
    maxWidth: '40%',
    margin: '0 auto'
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
  },
}

export default class CardNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      indexs: this.props.indexs
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    // console.log(this.props.cards)
  }

  handleClick() {
    this.props.randomCard(this.state.cards)
  }
  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
        <div style={this.props.combineStyleObjects(grid.IconContainer, {paddingTop: '5%'})}>
          {/* previous card */}
          <Icon colors={this.props.colors} text={'fast_rewind'} grid={grid.IconLeft} />
          {/* next card */}
          <Icon
            colors={this.props.colors}
            text={'fast_forward'}
            grid={grid.IconRight}
            onClick={this.handleClick}
          />
        </div>
      </React.Fragment>
    </MuiThemeProvider>)
  }
}
