import React from "react";
import { Panel } from "react-bootstrap";

export default class MovieRow extends React.Component
{
  render() {
    return (
      <Panel>
        {this.props.movie.title}
      </Panel>
    );
  }
};
