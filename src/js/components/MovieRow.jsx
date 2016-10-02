import React from "react";
import { Panel } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

export default class MovieRow extends React.Component
{
  render() {
    const rating = parseInt(this.props.movie.rating);

    return (
      <Panel>
        <h4>{this.props.movie.title}</h4>

        <p><strong>Genre: </strong>{this.props.movie.genre}</p>
        <p><strong>Actors: </strong>{this.props.movie.actors}</p>

        <StarRatingComponent
          id="rating"
          className="large"
          name="starRating"
          starCount={5}
          value={rating}
          editing={false}
        />
      </Panel>
    );
  }
};
