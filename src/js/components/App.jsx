import React from "react";
import Movie from "../util/Movie"
import Sidebar from "../components/Sidebar";
import style from "../../styles/main.scss";
import _ from "lodash";

export default class App extends React.Component
{
  constructor() {
    super();
    this.movieModel = new Movie();

    this.state = {
      movies: this.movieModel.getAll()
    };
  }

  handleSaveMovie(movie) {
    this.movieModel.save(movie);
    this.setState({movies: this.movieModel.getAll()});
  };

  handleMovieSearch(text) {
    const result = (text == '' ? this.movieModel.getAll() : this.movieModel.search(text));

    this.setState({'movies': result});
  }

  render() {
    var children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        movies: this.state.movies,
        handleMovieSearch: this.handleMovieSearch.bind(this),
        handleSaveMovie: this.handleSaveMovie.bind(this)
      });
    });

    return (
      <div>
        <Sidebar />

        <section className="main-content">
          <header>

          </header>

          <section>
            { children }
          </section>
        </section>
      </div>
    );
  }
};
