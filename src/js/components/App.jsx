import React from "react";
import Movie from "../util/Movie"

export default class App extends React.Component
{
  constructor(){
    super();
    this.movieModel = new Movie();
    this.state = {
      movies: this.movieModel.getAll()
    };

  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
};
