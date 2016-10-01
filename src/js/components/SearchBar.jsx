import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export default class SearchBar extends React.Component
{
  handleChange(event) {
    console.log(this.props);
    this.props.onUserInput(event.target.value);
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Search through your collection</ControlLabel>
          <FormControl
            type="text"
            placeholder="The Matrix, Keanu Reeves, 1999, etc"
            onChange={this.handleChange.bind(this)}
          />
        </FormGroup>
      </form>
    );
  }
};
