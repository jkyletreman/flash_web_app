import React, {Component} from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircleSmall from '../js/CircleSmall'
// import CircleLarge from '../js/CircleLarge'
// import Icon from '../js/Icon'
import '../css/Animations.css'
/* each Circle Component requires
  # onMouseEnter event
  # color in for of this.props.color.****
  # grid position
  # Text
  # combineStyleObjects fx from props
  */
// const test = {
//   height: '100px',
//   width: '100px',
//   backgroundColor: 'red'
// }
export default class AnimationTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      opacity: '1'
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
  }
  onMouseEnter() {
    console.log('working')
    this.setState({opacity: '0.2'})
  }
  render(){
    return (
      <div>
        {/* <div className='element' style={test}> */}

      {/* </div> */}
      <CircleSmall
        combineStyleObjects={this.props.combineStyleObjects}
        onMouseEnter={this.onMouseEnter}
        color={this.props.colors.pink}
        text={'Here I Am'}
        effects={this.state}
      />
    </div>
    )
  }
}
