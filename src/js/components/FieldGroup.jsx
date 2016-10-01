import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default class FieldGroup extends React.Component
{
  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...this.props} />
      </FormGroup>
    );
  }
};
