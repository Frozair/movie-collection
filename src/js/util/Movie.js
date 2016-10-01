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
        // Handle actors
        if(_.isArray(val))
        {
          val = _.join(val, ',');
        }

        return ( key == "id" ? false : _.includes(val.toLowerCase(), searchValue.toLowerCase()) );
      });

      return filtered.length > 0;
    });

    return results;
  }

  create({ genre, title, year, actors, rating }) {
    var movie = {
      id: _.uniqueId('movie_')
    }

    this.persist();
  }

  delete(id){
    this.movies[id];
    this.persist();
  }

  persist() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
};
