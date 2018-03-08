import React from 'react'
import FontIcon from 'material-ui/FontIcon'

// this class takes the following props
// # grid positioning
// # colors.color
// # text of material icon

export default class NavPage extends React.Component {
  render() {
    return (
      <div style={this.props.grid}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>

        <FontIcon
          className='material-icons'
          style={this.props.colors.iconGreyStyle}
          onClick={this.props.onClick}>
          {this.props.text}
        </FontIcon>

    </div>
    )
  }
}
