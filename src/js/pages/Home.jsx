import React from "react";
import SearchBar from "../components/SearchBar";
import MovieTable from "../components/MovieTable";
import Movie from "../util/Movie";

export default class Home extends React.Component
{
  render() {
    return (
      <div>
        <h1>My Movie Collection</h1>

        <SearchBar onUserInput={this.props.handleMovieSearch} />
        <MovieTable movies={this.props.movies} />
      </div>
    );
  }
};
