import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


    // sends you to the home page
    returnToMovie = () => {
        this.props.history.push('/')
    }

    //sends you to edit page 
    editMovie = () => {
        this.props.history.push('/edit')
    }

    render() {
        //grabs the info to display to the dom 
        let movieTitle;
        let moviePoster;
        let movieDescription;
        let filmInfo = this.props.reduxStore.genres.map((movie, index) => {
            if (index === 0) {
                movieTitle = <h1>{movie.title}</h1>;
                moviePoster = <img src = {movie.poster}/>;
                movieDescription = <p>{movie.description}</p>;
            }
            return (<ul key = {index}><li>{movie.name}</li></ul>)
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