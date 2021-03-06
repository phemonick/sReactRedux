import React from 'react';
import PropTypes from 'prop-types'
//functional component games= props
const GameList = ({ games }) => {
    const emptyMessage = (
        <p> There are no games yet in your collection</p>
    );
    const gameList = (
        <p> games list</p>
    );
    return(
        <div>
            {games.length ===0 ? emptyMessage : gameList }
        </div>
    )
}

GameList.propTypes = {
   games: PropTypes.array.isRequired
}

export default GameList