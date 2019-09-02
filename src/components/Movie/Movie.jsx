import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {

    // gets all the movies on page load
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    // sends the id to the index and sends you to the details page
    toDetails = (id) => {
        this.props.history.push('/details')
        console.log(id);
        this.props.dispatch({type: 'FETCH_MOVIE', payload: id })
    }
    
    
    render() {
        // loops through the movies from the database to display them
        let film = this.props.reduxStore.movies.map((movie, index) => {
            return (<div key={index} onClick={() => this.toDetails(movie.id)}>
                <h1>{movie.title}</h1>
                <img src={movie.poster} />
                <p>{movie.description}</p></div>)
        })
        return (
        <div>
            {film}
        </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Movie);
