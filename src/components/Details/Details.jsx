import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    returnToMovie = () => {
        this.props.history.push('/')
    }

    editMovie = () => {
        this.props.history.push('/edit')
    }

    render() {
        
        let movieTitle;
        let moviePoster;
        let movieDescription;
        let filmInfo = this.props.reduxStore.genres.map((movie, index) => {
            if (index === 0) {
                movieTitle = <h1>{movie.title}</h1>;
                moviePoster = <img src = {movie.poster}/>;
                movieDescription = <p>{movie.description}</p>;
            }
            return (<ul><li>{movie.name}</li></ul>)
        })
        return (
            <div>
                <button onClick = {this.returnToMovie}>back</button>
                <button onClick = {this.editMovie}>Edit</button>
                    {movieTitle}
                    {moviePoster}
                    {movieDescription}
                    {filmInfo}
               
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);