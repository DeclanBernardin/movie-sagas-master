import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
    }

    //returns you to details page without making edits
    return = () => {
        this.props.history.push('/details');
    }

    // changes the values of the states properties
    handleChangeTitle = ( event) => {
        this.setState({
                ...this.state,
                 title: event.target.value
        })
    }//end handleChangeFor

    handleChangeDescription = (event) => {
        this.setState({
                ...this.state,
                description: event.target.value
        })
    }

    // sends changes to redux
    editChanges = (id) => {
        this.props.dispatch({type:'PUT_UPDATES', payload: {title: this.state.title, description: this.state.description, id: id}})
        console.log(this.state);
        this.props.history.push('/');
    }


    render() {
        let filmInfo = this.props.reduxStore.genres.map((movie, index) => {
            return (<button key = {index} onClick={() => this.editChanges(movie.movie_id)}>Save</button>)
        })
        return (
            <div>
                <button onClick = {this.return}>Cancel</button>
                
                <input placeholder='title' onChange={(event) => this.handleChangeTitle(event)}></input>
                <textarea placeholder='description' onChange={(event) => this.handleChangeDescription(event)}></textarea>
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

export default connect(mapStateToProps)(Edit);