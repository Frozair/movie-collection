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

  save({ genre, title, year, actors, rating, id = null }) {
    let movie = {
      genre: genre,
      title: title,
      year: year,
      actors: actors,
      rating: rating
    };

    // Update if id is valid
    if( !_.isNull(id) ) {
      let movieIdx = _.findIndex(this.movies, (movie) => {
        return movie.id == id;
      });

      movie['id'] = id;

      this.movies[movieIdx] = movie;
    }
    else {  // Create a new movie
      movie['id'] = _.now();
      this.movies.push(movie);
    }

    this.persist();
  }

  delete(id){
    this.movies = _.filter(this.movies, (movie) => {
      return movie.id != id;
    });

    this.persist();
  }

  persist() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
};
