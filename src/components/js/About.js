import React from 'react'
import NavBar from './NavBar'

const style = {
  padding: '5%',
  margin: '0 auto',
  fontSize: '36px',
  textAlign: 'center',
  maxWidth: '40%',
  border: '5px solid black',
  listStylePosition: 'center',
  color: 'white'
}

export default class About extends React.Component {
  render() {
    return (<React.Fragment >
      <div style={{
          paddingTop: '10%'
        }}>
        <ul style={style}>
          <li>React</li>
          <li>React Router</li>
          <li>Material UI Icons</li>
          <li>NodeJS</li>
          <li>Knex</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <NavBar colors={this.props.colors} combineStyleObjects={this.props.combineStyleObjects}/>
    </React.Fragment>)
  }
}
