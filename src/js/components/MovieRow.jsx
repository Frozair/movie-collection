import React from "react";
import { Panel } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router';

export default class MovieRow extends React.Component
{
  render() {
    const movie = this.props.movie;
    const rating = parseInt(movie.rating);

    return (
      <Link className="no-link-decoration" to={{ pathname: "save", query: { movieId: movie.id } }}>
        <Panel>
          <h4>{movie.title}</h4>

          <p><strong>Genre: </strong>{movie.genre}</p>
          <p><strong>Actors: </strong>{movie.actors}</p>

          <StarRatingComponent
            id="rating"
            className="large"
            name="starRating"
            starCount={5}
            value={rating}
            editing={false}
          />
        </Panel>
      </Link>
    );
  }
};
