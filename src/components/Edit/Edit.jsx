import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        title: '',
        description: '',
        id: ''
    }

    //returns you to details page without making edits
    return = () => {
        this.props.history.push('/details');
    }

    // changes the values of the states properties
    handleChangeTitle = ( event) => {
        this.setState({
            user: {
                ...this.state.title,
                 title: event.target.value
            }
        })
    }//end handleChangeFor

    handleChangeDescription = (event) => {
        this.setState({
            user: {
                ...this.state.description,
                description: event.target.value
            }
        })
    }

    editChanges = (id) => {
        this.setState({
            ...this.state,
            id: id
        })
        this.props.dispatch({type:'PUT_UPDATES', payload: this.state})
        console.log(this.state);
        
    }


    render() {
        let filmInfo = this.props.reduxStore.genres.map((movie, index) => {
            return (<button key = {index} onClick={() => this.editChanges(movie.id)}>Edit</button>)
        })
        return (
            <div>
                <button onClick = {this.return}>Cancel</button>
                
                <input placeholder='title' onChange={(event) => this.handleChangeTitle(event)}></input>
                <input placeholder='description' onChange={(event) => this.handleChangeDescription(event)}></input>
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