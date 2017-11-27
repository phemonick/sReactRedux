import React from 'react';

//functional component
export default function GameList({ games }) {
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
   
}