import React from "react";
import SearchBar from "../components/SearchBar";
import MovieTable from "../components/MovieTable";

export default class Home extends React.Component
{
  render() {
    return (
      <div>
        <h2>Movie Collection</h2>

        <SearchBar onUserInput={this.props.handleMovieSearch} />
        <MovieTable movies={this.props.movies} />
      </div>
    );
  }
};
