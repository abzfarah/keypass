import _ from 'lodash'

class Session {

    constructor () {
        this.movies = window.localStorage.getItem('movies') ? JSON.parse(window.localStorage['movies']) : new Array()

    }

    get clear () {
        return window.localStorage.clear()
    }

    add(movie) {
        if (!_.includes(this.movies, movie)) {
            this.movies.push(movie)
            window.localStorage['movies'] = JSON.stringify(this.movies)
        }
    }
}

const session = new Session()

export default session