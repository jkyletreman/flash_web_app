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
      question: '',
      answer: '',
      cards: [],
      indexs: []
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
  // get random card (contains a question and answer)
  randomCard(array) {
    // reset Answer to display null
    const clickFX = {...this.state.clickFX}
    clickFX.display = 'none'
    this.setState({clickFX: clickFX})
    // grab indexs that have been used, filter out used cards, get random from remaining
    const indexs = this.state.indexs;
    const remainingCards = array.filter((card, index) => !indexs.includes(index))
    const randomIdx = Math.floor((Math.random() * remainingCards.length));
    // set new question and answer
    var question = "Congrats! You've completed you're training"
    var answer = "Click next to reload the cards"
    // check to make sure we are not out of cards
    if (this.state.cards.length !== this.state.indexs.length || this.state.indexs.length === 0) {
    // add new card to list of knockouts via original index
    var question = remainingCards[randomIdx].question
    var answer = remainingCards[randomIdx].answer
      this.state.cards.forEach((card, index) => {
        if (card.question === question) {
          indexs.push(index)
        }
      })
      // if all the cards have been used
    } else if (this.state.cards.length === this.state.indexs.length) {
      // need to add a condintional render here for "training complete"
      this.setState({indexs: [], question: '', answer: ''})
    } else {
      // not sure what I wanted to do with the else
      this.setState({})
    }
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
      {
        (this.state.clickFX.display === 'block')
      ? <CardNav
          colors={this.props.colors}
          combineStyleObjects={this.props.combineStyleObjects}
          randomCard={this.randomCard}
          cards={this.state.cards}
          indexs={this.state.indexs}
        />
      : null}
      <NavBar
        colors={this.props.colors}
        combineStyleObjects={this.props.combineStyleObjects}
      />
    </React.Fragment>)
  }
}
