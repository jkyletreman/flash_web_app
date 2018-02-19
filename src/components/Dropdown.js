import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: '200',
    backgroundColor: 'white'
  },
};

export default class CreateDropDownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu style={styles} value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText='Collection' />
          <MenuItem value={2} primaryText="Card" />
        </DropDownMenu>
      </div>
    );
  }
}
