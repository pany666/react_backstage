import React, { Component } from 'react';
import './movie.css';
import Search from './movie_search';
import MovieList from './movie_list';

export default class Movie extends Component{
  state = {
    keyword: 'man'
  }
  handleSearch = (keyword) => {
    this.setState({ keyword })
  }
  render(){
    const { keyword } = this.state;
    return (
    <React.Fragment>
      {/* <div className='header'>React电影</div>  */}
      <Search  handleSearch={this.handleSearch} />
      <MovieList keyword={ keyword } />
     </React.Fragment>
  );
  }
  
}