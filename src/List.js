import React, { Component } from 'react';
import classNames from 'classnames'
import { connect, PromiseState } from 'react-refetch'
import session from './session'

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                Loading...
            </div>
        </div>
    );
}

class List extends Component {
    constructor (props) {
      super(props)
      this.handler = this.handler.bind(this)
    }

    handler(option, movie) {
        const { movieRating, moviesFetch } = this.props
        let imdbID = movie.imdbID

        fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=short&r=json`).then(function(response) {
            return response.json();
        }).then(function(data) {
            let imdbRating = data.imdbRating
            movie.imdbRating = imdbRating
            session.add(movie)
        })
        this.props.router.push('/favourites')

    }

    renderOption (option) {

        let title = option.Title
        let id = option.imdbID
        return (
            <div className="row" key={id}>
                <div>
                    {title}
                </div>

                <div className="btn">
                    <Button option={option} handler={this.handler}/>
                </div>
            </div>
        )
    }

    buildMenu (value) {
        let options = value.Search
        let ops = options.map((option) => {
                return this.renderOption(option)

        })

        return ops
    }

    render() {
        const { value, pending } = this.props.moviesFetch

        let loadingClass = classNames({
            [`loading`]: pending
        })

        let list = null

        if (value !== null && value.Response !== 'False') list = this.buildMenu(value)
        return (
            <div className="hey">
                { pending &&  <Loader /> }
                { list }
            </div>

            );
        }
}

class Button extends Component {

    constructor (props) {
        super(props)
    }
    render() {

        const { handler, option } = this.props
        return (
            <button
                onClick = { (e) => this.props.handler(e, option) }
                className="btn btn-default"
                >ADD</button>

        );
    }
};


export default connect(props => {
  const term = props.term
  return {
      moviesFetch: `http://www.omdbapi.com/?s=${term}&tomatoes=true`,
      fetchMovieRating: id => ({
          movieRating: `http://www.omdbapi.com/?i=${id}&plot=short&r=json`
      })
  }
})(List)