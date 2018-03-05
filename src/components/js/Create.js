import React from 'react'
import NavBar from './NavBar'
const style = {
  margin: '0 auto',
  marginTop: '10%',
  display: 'grid',
  maxWidth: '70%',
  paddingBottom: '5%'
}
const grid = {
  oneL: {
    gridRow: '1',
    gridColumn: '1'
  },
  oneR: {
    gridRow: '1',
    gridColumn: '2'
  },
  twoL: {
    gridRow: '2',
    gridColumn: '1'
  },
  twoR: {
    gridRow: '2',
    gridColumn: '2'
  },
  threeL: {
    gridRow: '3',
    gridColumn: '1'
  },
  threeR: {
    gridRow: '3',
    gridColumn: '2'
  },
  fourL: {
    gridRow: '4',
    gridColumn: '1'
  },
  fourR: {
    gridRow: '4',
    gridColumn: '2'
  },
  button: {
    display: 'flex',
    margin: '0 auto',
  }
}

export default class Create extends React.Component {
  render() {
    return (
      <React.Fragment>
          <form style={style}>
            <label style={grid.oneL}>Collection</label>
            <input style={grid.oneR} type='text' name="collection" />

            <label style={grid.twoL}>Name</label>
            <input style={grid.twoR} type='text' name="Name" />

            <label style={grid.threeL}>Question</label>
            <input style={grid.threeR} type='text' name="Question" />

            <label style={grid.fourL}>Answer</label>
            <input style={grid.fourR} type='text' name="Answer" />
          </form>

          <input style={grid.button} type='submit' value='Add a Flash' />

          <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
      </React.Fragment>)
  }
}
