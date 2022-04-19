import React, { Component } from 'react';
import AddMovie from './AddMovie';
import Movies from './Movies';

class Search extends Component{
    state ={
        url:'',
        movies:[]
      }
      addMovie =(movie,url)=>{
        movie.mrating=0;
        let movies = [...this.state.movies,movie];
        let noDuplicates = movies.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        this.setState({
          url:url,
          movies: noDuplicates
        });
      }
      updateLike=(id)=>{
        let index= (this.state.movies).findIndex((movie)=>{
          return movie.id===id
        })
        let moviesCopy = [...this.state.movies];
        moviesCopy[index].mrating+=1;
        this.setState({
            movies:moviesCopy
        });
      }
      render(){
        return (
            <div className="search">
                <AddMovie addMovie={this.addMovie}/>
                <Movies obj={this.state.movies} updateLike={this.updateLike} url={this.state.url}/>
            </div>
        );
      }
}

export default Search;