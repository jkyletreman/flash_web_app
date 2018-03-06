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
      question: null,
      answer: null,
      cards: [],
      indexs: [1]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.randomCard = this.randomCard.bind(this)
  }
  // initiating fetch on load
  componentWillMount() {
    this.fetchCards();
  }
  // pulling cards from DB
  async fetchCards() {
    const response = await fetch('http://localhost:8000/cards');
    const cards = await response.json();
    this.setState({cards: cards})
    this.randomCard(cards);
  }
  // get random card
  randomCard(array) {
    const indexs = this.state.indexs;
    const unused = array.filter((card, index) => !indexs.includes(index))
    const randomIdx = Math.floor((Math.random() * unused.length));
    // TODO: Need to track the Original Index to knock out the cards
    const question = unused[randomIdx].question
    const answer = unused[randomIdx].answer
    this.setState({indexs: indexs, question: question, answer: answer});
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
          text={this.state.question}
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
          text={this.state.answer}
        />
      </div>
      {/* App navigation */}
      {/* TODO conditionally render based on cards being not empty  */}
      <CardNav
        colors={this.props.colors}
        combineStyleObjects={this.props.combineStyleObjects}
        randomCard={this.randomCard}
        cards={this.state.cards}
        indexs={this.state.indexs}
      />
      <NavBar
        colors={this.props.colors}
        combineStyleObjects={this.props.combineStyleObjects}
      />
    </React.Fragment>)
  }
}
