import React from "react";
import _ from "lodash";
import MovieRow from "./MovieRow"

export default class MovieTable extends React.Component
{
  render() {
    if(this.props.movies.length == 0)
    {
      return (
        <p>No movies found. Please add a new one or search for a different movie.</p>
      );
    }

    var rows = _.map(this.props.movies, (movie) => {
      return (<MovieRow movie={movie} key={movie.id}></MovieRow>);
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
};
