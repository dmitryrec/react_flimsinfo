import React, { Component } from 'react';
import './movies-container.css';

import { connect } from 'react-redux';
import MovieCard from '../movie-card';

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';

        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null;
        return (
            <div className="moviesContainer">
                {content}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);