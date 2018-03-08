import React from 'react'
import Rectangle from './Rectangle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar'
import CardNav from './CardNav'

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
  answer1: {
    gridRow: '2',
    gridColumn: '1',
    marginTop: '3%'
  },
  answer2: {
    gridRow: '3',
    gridColumn: '1',
    marginTop: '3%'
  }
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickFX: {
        display: 'none',
      },
      question: '',
      firstChoice: '',
      secondChoice: '',
      answer: '',
      cards:[],
      indexs: [],
      firstColor: this.props.colors.blue,
      secondColor: this.props.colors.green,
    }
      this.handleClick = this.handleClick.bind(this);
      this.randomCard = this.randomCard.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
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
      // reset Answer to display null and the choice colors
      const clickFX = {...this.state.clickFX}
      clickFX.display = 'none';
      this.setState({clickFX: clickFX})
      this.setState({firstColor: this.props.colors.blue, secondColor: this.props.colors.green})

      // grab indexs that have been used, filter out used cards, get random from remaining
      const indexs = this.state.indexs;
      const remainingCards = array.filter((card, index) => !indexs.includes(index))
      const randomIdx = Math.floor((Math.random() * remainingCards.length));
      // check to make sure we are not out of cards
      if (this.state.cards.length !== this.state.indexs.length || this.state.indexs.length === 0) {
        // add new card to list of knockouts via original index
        var question = remainingCards[randomIdx].question
        var firstChoice = remainingCards[randomIdx].answer
        // TODO need to change this into a random display
        var answer = firstChoice
        var secondChoice = remainingCards[(randomIdx + 1) % 8].answer

        this.state.cards.forEach((card, index) => {
          if (card.question === question) {
            indexs.push(index)
          }
        })
        // if all the cards have been used
      } else if (this.state.cards.length === this.state.indexs.length) {
        // need to add a condintional render here for "training complete"
      } else {
        // not sure what I wanted to do with the else
        this.setState({})
      }
        this.setState({indexs: indexs, firstChoice: firstChoice, secondChoice: secondChoice, question: question, answer: answer});
    }
    // Right/wrong
    handleClick2() {
      const checkAnswer = this.state.answer;
      const checkFirstChoice = this.state.firstChoice;
      const checkSecondChoice = this.state.secondChoice;

      if (checkAnswer === checkFirstChoice) {
        this.setState({firstColor: this.props.colors.right, secondColor: this.props.colors.wrong})
      } else {
        this.setState({firstColor: this.props.colors.wrong, secondColor: this.props.colors.right})

      }
    }
    // Ux/Ui
    handleClick() {
      const clickFX = {...this.state.clickFX}
      clickFX.display = 'block'
      this.setState({clickFX: clickFX})
    }
  render() {
    return (<MuiThemeProvider>
      <React.Fragment>
      <div style={this.props.combineStyleObjects(grid.container, {paddingBottom: '2%'})}>
        <Rectangle
          onClick={this.handleClick}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.props.colors.white}
          grid={grid.question}
          text={this.state.question}
        />
        <Rectangle
          // State
          fx={this.state.clickFX}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.state.firstColor}
          grid={grid.answer1}
          text={this.state.firstChoice}
          onClick={this.handleClick2}
        />
        <Rectangle
          // State
          fx={this.state.clickFX}
          // Style & Props
          combineStyleObjects={this.props.combineStyleObjects}
          style={this.state.secondColor}
          grid={grid.answer2}
          text={this.state.secondChoice}
          onClick={this.handleClick2}
        />
      </div>
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
      <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
    </React.Fragment>
  </MuiThemeProvider>)
  }
}
