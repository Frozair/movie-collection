import React from "react";
import SearchBar from "../components/SearchBar";
import MovieTable from "../components/MovieTable";
import Movie from "../util/Movie";

export default class Home extends React.Component
{
  constructor() {
    super();
    this.movieModel = new Movie();

    this.state = {
      movies: this.movieModel.getAll()
    };
  }

  handleUserInput(text) {
    const result = (text == '' ? this.movieModel.getAll() : this.movieModel.search(text));

    this.setState({'movies': result});
  }

  render() {
    return (
      <div>
        <SearchBar onUserInput={this.handleUserInput.bind(this)} />
        <MovieTable movies={this.state.movies} />
      </div>
    );
  }
};
