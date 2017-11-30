import React, {Component } from 'react';
//to run content of store 
import { connect } from 'react-redux';
import GameList from './GameList';
import PropTypes from 'prop-types'
import { fetchGames } from './actions'
class GamePage extends Component {

    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return(

            <div>
                <h1>Game List {typeof(this.props.games)} </h1>
                <GameList games={this.props.games} />
            </div>
        )
    }
}
GamePage.propTypes = {
     games: PropTypes.array.isRequired,
     fetchGames: PropTypes.func.isRequired
}
//takes state from redux store and pass to comp as props
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}
//connect component to redux
export default connect(mapStateToProps, { fetchGames })(GamePage);