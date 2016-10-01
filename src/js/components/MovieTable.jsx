import React from "react";
import _ from "lodash";
import MovieRow from "./MovieRow"

export default class MovieTable extends React.Component
{
  render() {
    if(this.props.movies.length == 0)
    {
      return (
        <h3>No movies saved yet, please add a movie.</h3>
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
