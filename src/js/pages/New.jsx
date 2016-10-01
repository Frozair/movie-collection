import React from "react";
import Genres from "../util/Genres";
import _ from "lodash";

import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import FieldGroup from "../components/FieldGroup";

import StarRatingComponent from 'react-star-rating-component';

export default class New extends React.Component
{
  constructor(props) {
    super(props);

    let movie = {}
    if( _.isUndefined(this.props.movie) )
    {
      this.movie = {
        genre: Genres[0],
        title: '',
        year: '',
        actors: '',
        rating: 0
      };
    } else {
      this.movie = this.props.movie;
    }
  }

  setValue(event) {
    const value = event.target.value;
    const key = event.target.id;

    this.movie[key] = value;
  }

  setRating(nextValue, prevValue, name) {
    this.movie.rating = nextValue.toString();
  }

  onSubmit() {
    this.props.handleSaveMovie(this.movie);
  }

  render() {
    var genreOptions = _.map(Genres, (genre) => {
      return (<option value={genre} key={genre}>{genre}</option>);
    });

    return (
      <div>
        <FieldGroup
          id="title"
          type="text"
          label="Title"
          placeholder="The Matrix"
          onChange={this.setValue.bind(this)}
        />

        <FormGroup>
          <ControlLabel>Genre</ControlLabel>
          <FormControl
            id="genre"
            componentClass="select"
            placeholder="select"
            onChange={this.setValue.bind(this)}
          >
            { genreOptions }
          </FormControl>
        </FormGroup>

        <FieldGroup
          id="actors"
          type="text"
          label="Actors"
          placeholder="Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"
          onChange={this.setValue.bind(this)}
        />

        <FieldGroup
          id="year"
          type="number"
          label="Year"
          placeholder="1999"
          onChange={this.setValue.bind(this)}
        />

        <FormGroup controlId="starRating">
          <StarRatingComponent
            id="rating"
            className="large"
            name="starRating"
            starCount={5}
            onStarClick={this.setRating.bind(this)}
          />
        </FormGroup>

        <Button type="submit" className="btn-primary" onClick={this.onSubmit.bind(this)}>
          Save
        </Button>
      </div>
    );
  }
};
