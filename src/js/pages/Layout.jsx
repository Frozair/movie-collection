import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component
{
  render() {
    return (
      <div>
        <header>
          <h1>My Movie Collection</h1>
          <Link to="/">Home</Link>
        </header>
        <section>
          { this.props.children }
        </section>
      </div>
    );
  }
};
