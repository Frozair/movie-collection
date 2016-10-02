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

    const { query } = this.props.location;
    let movie = {}
    if( _.isUndefined(query.movieId) )
    {
      this.movie = {
        genre: Genres[0],
        title: '',
        year: '',
        actors: '',
        rating: 0
      };

      this.newMovie = true;
    } else {
      let movieIdx = _.findIndex(this.props.movies, (movie) => {
        return movie.id == query.movieId;
      });

      this.movie = this.props.movies[movieIdx];
      this.newMovie = false;
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

  onDelete() {
    this.props.handleDeleteMovie(this.movie);
  }

  render() {
    let genreOptions = _.map(Genres, (genre) => {
      return (<option value={genre} key={genre}>{genre}</option>);
    });

    const rating = parseInt(this.movie.rating);
    const header = (this.newMovie ? 'Create a New Movie Entry' : 'Update/Delete Movie');

    let delButton;
    if( !this.newMovie ) {
      delButton = (
        <Button type="submit" className="btn-danger pull-right" onClick={this.onDelete.bind(this)}>
        Delete
        </Button>)
    }

    return (
      <div>
        <h1>{ header }</h1>

        <FieldGroup
          id="title"
          type="text"
          label="Title"
          placeholder="The Matrix"
          defaultValue={this.movie.title}
          onChange={this.setValue.bind(this)}
        />

        <FormGroup>
          <ControlLabel>Genre</ControlLabel>
          <FormControl
            id="genre"
            componentClass="select"
            placeholder="select"
            defaultValue={this.movie.genre}
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
          defaultValue={this.movie.actors}
          onChange={this.setValue.bind(this)}
        />

        <FieldGroup
          id="year"
          type="number"
          label="Year"
          placeholder="1999"
          defaultValue={this.movie.year}
          onChange={this.setValue.bind(this)}
        />

        <FormGroup controlId="starRating">
          <StarRatingComponent
            id="rating"
            className="large"
            name="starRating"
            starCount={5}
            value={rating}
            onStarClick={this.setRating.bind(this)}
          />
        </FormGroup>

        <Button type="submit" className="btn-primary" onClick={this.onSubmit.bind(this)}>
          Save
        </Button>

        { delButton }
      </div>
    );
  }
};
