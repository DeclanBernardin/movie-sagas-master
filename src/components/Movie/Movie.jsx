import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    toDetails = () => {
        this.props.history.push('/Details')
    }
    
    render() {
        let film = this.props.reduxStore.movies.map((movie) => {
            return (<div onClick = {this.toDetails}><h1>{movie.title}</h1><img src = {movie.poster}/><p>{movie.description}</p></div>)
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
