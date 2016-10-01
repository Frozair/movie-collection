import React from "react";
import { Panel, Nav, NavItem } from "react-bootstrap";
import FieldGroup from "./FieldGroup";

export default class New extends React.Component
{
  render() {
    return (
      <div>
        <FieldGroup
          id="titleText"
          type="text"
          label="Title"
          placeholder="World War Z"
        />
      </div>
    );
  }
};
