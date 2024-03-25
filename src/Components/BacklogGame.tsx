import React from 'react';
import { IGame } from '../Interfaces';

interface Props {
  game: IGame;
  deleteGame(gameNameToDelete: string): void;
}

const BacklogGame = ({ game, deleteGame }: Props) => {
  return (
    <div className='game'>
      <div className="content">
        <span>{game.gameName}</span>
        <span>{game.console}</span>
      </div>
      <button onClick={() => {
        deleteGame(game.gameName);
      }}>X</button>
    </div>
  );
}

export default BacklogGame;