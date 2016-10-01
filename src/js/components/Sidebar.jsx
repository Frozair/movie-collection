import React from "react";
import { browserHistory } from 'react-router';
import style from "../../styles/sidebar.scss";
import { Glyphicon, Nav, NavItem } from "react-bootstrap";

export default class Sidebar extends React.Component
{
  render() {
    return (
      <div className="side-bar">
        <Nav stacked activeKey={1} >
          <NavItem eventKey={1} title="Home" href="/#"><Glyphicon className="large" glyph="home" /></NavItem>
          <NavItem eventKey={2} title="New Movie" href="/#new"><Glyphicon className="large" glyph="plus" /></NavItem>
        </Nav>
      </div>
    );
  }
};
