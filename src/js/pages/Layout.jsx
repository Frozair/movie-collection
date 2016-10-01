import React from "react";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import style from "../../styles/main.scss";

export default class Layout extends React.Component
{
  render() {
    return (
      <div>
        <Sidebar />

        <section className="main-content">
          <header>
            <h1>My Movie Collection</h1>
          </header>
          
          <section>
            { this.props.children }
          </section>
        </section>
      </div>
    );
  }
};
