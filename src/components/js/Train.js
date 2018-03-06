import React from 'react'
import Rectangle from './Rectangle'
import NavBar from './NavBar'
import CardNav from './CardNav'
// positioning to pass each rendered component
const grid = {
  container: {
    display: 'grid',
    margin: '0 auto',
    maxWidth: '70%',
  },
  question: {
    gridRow: '1',
    gridColumn: '1',
  },
  answer: {
    gridRow: '2',
    gridColumn: '1',
    marginTop: '4%',
  }
}

export default class Train extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickFX: {
        display: 'none'
      },
      hoverFX: {
        opacity: '0.8'
      },
      questions: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  // pulling cards from DB
  async fetchCards() {
    const response = await fetch('http://localhost:8000/cards');
    const cards = await response.json();
    this.setState({questions: cards})
  }
  // initiating fetch on load
  componentDidMount() {
    this.fetchCards();
  }

  // event handlers (Ui/Ux)
  handleClick() {
    const clickFX = {...this.state.clickFX}
    clickFX.display = 'block'
    this.setState({clickFX: clickFX})
  }
  handleMouseEnter() {
    const mouseEnterFX = {...this.state.hoverFX}
    mouseEnterFX.opacity = '1'
    this.setState({hoverFX: mouseEnterFX})
  }
  handleMouseLeave(){
    const mouseLeaveFX = {...this.state.hoverFX}
    mouseLeaveFX.opacity = '0.8'
    this.setState({hoverFX: mouseLeaveFX})
  }

  render() {
    return (<React.Fragment>
      <div style={grid.container}>
        {/* Question */}
        <Rectangle
          //Events
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          // State
          fx={this.state.hoverFX}
          // Props & Style
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.question}
          style={this.props.colors.white}
          text={'Question?'}
        />
        {/* Answer */}
        <Rectangle
          //Events
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          // State
          fx={this.props.combineStyleObjects(this.state.clickFX, this.state.hoverFX)}
          // Props & Style
          combineStyleObjects={this.props.combineStyleObjects}
          grid={grid.answer}
          style={this.props.colors.blue}
          text={'Answer!'}
        />
      </div>
      <CardNav colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/> 
      <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
    </React.Fragment>)
  }
}
