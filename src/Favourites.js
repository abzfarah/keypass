import React, { Component } from 'react';
import classNames from 'classnames'
import session from './session'
import _ from 'lodash'

class Favourites extends Component {
 constructor (props) {
    super(props)
    this.state = {
     movies: []
    }
    this.removeHandler = this.removeHandler.bind(this)
    this.clearHandler = this.clearHandler.bind(this)
   }

   clearHandler() {
    session.clear
    this.setState({ movies: []})
   }

    removeHandler(option, movie) {
      const { movieRating, moviesFetch } = this.props
      let index = _.findIndex(JSON.parse(window.localStorage['movies']), movie)
      let movieList = JSON.parse(window.localStorage['movies'])
      movieList.splice(index, 1)
      window.localStorage['movies'] = JSON.stringify(movieList)
      this.setState({ movies: movieList})
    }

    renderOption (movies) {
      const { Title, Year, imdbRating } = movies
      return (
       <div className="row"  key={Title} >
           <div>
               <div>{Title} ({Year}) </div>
               <div> { imdbRating} </div>
           </div>
           <div className="btn">
               <Button  movies={movies} removeHandler={this.removeHandler}/>
           </div>
       </div>
      )
    }

    buildMenu (movies) {
        let ops = movies.map((movie) => {
            return this.renderOption(movie)
        })
        return ops
    }

    componentWillMount() {
        if ( localStorage.getItem("movies") !== null ) {
            let movies
            movies = JSON.parse(localStorage['movies'])
            this.setState({ movies })
        }
    }

    componentWillUpdate() {
        if ( localStorage.getItem("movies") !== null ) {
            let movies
            movies = JSON.parse(localStorage['movies'])

        }
    }

    render() {
        let list
        if (this.state.movies !== [] ) list = this.buildMenu(this.state.movies)
        return (
            <div className="hey">
                <div>
                    <div>Favourites</div>
                </div>
                <div className="hey">
                    { list }
                </div>

             <button
              onClick = {this.clearHandler}
              className="btn btn-default">Clear</button>

            </div>

        );
    }
}

class Button extends Component {
 render() {
    const { handler, movies} = this.props
     return (
         <button
            onClick = { (e) => this.props.removeHandler(e, movies) }
            className="btn btn-default">REMOVE</button>


     );
    }
};


export default Favourites