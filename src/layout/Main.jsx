import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
const API_KEY = '';

class Main extends Component {
  state = {
    movies: [ ],
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s='${str}'`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    const {movies} = this.state;

    return ( 
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length 
          ? (<Movies movies={this.state.movies} />)
          : <Preloader />
        }
        
      </main>
    );
  }
}

export default Main;