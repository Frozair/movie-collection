import React from "react";
import style from "../../styles/sidebar.scss";
import { Glyphicon, Nav, NavItem, OverlayTrigger, Tooltip } from "react-bootstrap";

export default class Sidebar extends React.Component
{
  render() {
    const homeTooltip = (<Tooltip id="homeTooltip">Home</Tooltip>);
    const addTooltip = (<Tooltip id="addTooltip">Add New Movie</Tooltip>);
    return (
      <div className="side-bar">
        <Nav stacked activeKey={1} >
          <OverlayTrigger placement="right" overlay={homeTooltip}>
            <NavItem eventKey={1} title="Home" href="/#"><Glyphicon className="large" glyph="home" /></NavItem>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={addTooltip}>
            <NavItem eventKey={2} title="New Movie" href="/#save"><Glyphicon className="large" glyph="plus" /></NavItem>
          </OverlayTrigger>
        </Nav>
      </div>
    );
  }
};
