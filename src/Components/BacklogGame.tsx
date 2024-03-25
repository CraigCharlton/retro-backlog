import React from 'react';
import { IGame } from '../Interfaces';

interface Props {
  game: IGame;
  deleteGame(gameNameToDelete: string): void;
}

const BacklogGame = ({ game, deleteGame }: Props) => {
  return (
    <div className="grid-row">
      <div className='grid-item'>
        {game.gameName}
      </div>
      <div className='grid-item'>
        {game.console}
      </div>
      <div className='grid-item'>
        <button onClick={() => {
          deleteGame(game.gameName);
        }}>X</button>
      </div>
    </div>
  );
}

export default BacklogGame;