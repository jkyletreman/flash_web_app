import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Rectangle from './Rectangle'
import Icon from './Icon'

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
    return (<React.Fragment>
      <div style={grid.IconBack}>
        <Icon text={'fast_rewind'} colors={this.props.colors} />
      </div>
      <div style={grid.container}>
        <Rectangle style={this.props.colors.white} grid={grid.question} text={'Question?'}/>
        <Rectangle style={this.props.colors.blue} grid={grid.answer1} text={'Choice #1'}/>
        <Rectangle style={this.props.colors.green} grid={grid.answer2} text={'Choice #2'}/>
      </div>
    </React.Fragment>)
  }
}

// Old Code Snippets
// Old divs now Rectangle Component
{/* <div class='question' style={Object.assign(spacing.question, this.props.shape.rectangle, this.props.colors.white)}><p>Question?</p></div> */
} {/* <div class='answer' style={Object.assign(spacing.answer1, this.props.shape.rectangle, this.props.colors.green)}><p>Choice</p></div> */
} {/* <div class='answer' style={Object.assign(spacing.answer2, this.props.shape.rectangle, this.props.colors.blue)}><p>Choice</p></div> */
}
