import React, { Component } from 'react';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { saveGame } from './actions'
class GameForm extends Component {

    state = {
        title: '',
        cover: '',
        errors: {},
        loading: false
    }

    handleChange = (event) => {
        // if error exist
        if (!!this.state.errors[event.target.name]) {
        let errors = Object.assign({}, this.state.errors)
        delete errors[event.target.name];
        this.setState({ [event.target.name]: event.target.value, errors })
        
        }
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let errors={};
        if(this.state.title === '') errors.title = "cant be empty";
        if(this.state.cover === '') errors.cover = "cant be empty";
        this.setState({ errors })
        // object.keys returns array of keys
        const isValid = Object.keys(errors).length === 0;

        if(isValid) {
            const { title, cover } = this.state;
            this.setState({loading: true})
            // then first arg is success, second is error
            this.props.saveGame({title, cover}).then(
                () => {},
                (err) => err.res.json().then(({errors}) => this.setState({ errors, loading: git add })) 

            )
        }
    }

    render() {
        return(
            // loading when not valid
            <form className= {classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
            <h1> new Game form </h1>
            {/* !! converts to boolean */}
            {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
                <div className={ classnames('field', {error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.title} </span>
                </div>
                <div className={ classnames('field', {error: !!this.state.errors.cover})}>
                    <label htmlFor="cover">cover URL</label>
                    <input 
                        id="cover"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.cover} </span>
                </div>
                <div className="field">
                  {this.state.cover !=='' && <img src={this.state.cover} alt ="no img" className="ui small bordered image" />}
                </div>
                                
                <div className="field">
                   <button className="ui primary button"> Save</button>
                </div>
            </form>
        )
    }
}
// null because we not getting data from global state, second 
// second argument is object of action ie saveGame
export default connect(null,{ saveGame })(GameForm);
