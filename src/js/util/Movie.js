import _ from "lodash";

export default class Movie {
  constructor() {
    const movies = localStorage.getItem('movies');
    this.movies = ( movies == null ? [] : JSON.parse(movies) );
  }

  getAll() {
    return this.movies;
  }

  search(searchValue) {
    let results = _.filter(this.movies, (movie) => {
      let filtered = _.filter(movie, (val, key) => {
        return ( key == "id" || key == "rating" ? false : _.includes(val.toLowerCase(), searchValue.toLowerCase()) );
      });

      return filtered.length > 0;
    });

    return results;
  }

  save({ genre, title, year, actors, rating, movieId = null }) {
    const id = ( _.isNull(movieId) ? _.uniqueId('movie_') : movieId );

    var movie = {
      id,
      genre: genre,
      title: title,
      year: year,
      actors: actors,
      rating: rating
    }

    this.movies.push(movie);
    this.persist();
  }

  delete(id){
    let results = _.filter(this.movies, (movie) => {
      return movie.id != id;
    });

    this.persist();
  }

  persist() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
};
