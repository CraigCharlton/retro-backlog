import React from 'react';
import { IGame } from '../Interfaces';

interface Props {
  game: IGame;
  deleteGame(gameNameToDelete: string): void;
  toggleComplete(gameNameToComplete: string): void;
}

const BacklogGame = ({ game, deleteGame, toggleComplete }: Props) => {
  return (
    <div className="grid-row" style={{ textDecoration: game.completed ? "line-through" : "none" }}>
      <div className='grid-item'>
        {game.gameName}
      </div>
      <div className='grid-item'>
        {game.console}
      </div>
      <div className='grid-item inputs'>
        <input type='checkbox' checked={game.completed} onChange={() => {
          toggleComplete(game.gameName);
        }} />
      </div>
      <div className='grid-item inputs'>
        <button className='remove' onClick={() => {
          deleteGame(game.gameName);
        }}>X</button>
      </div>
    </div>
  );
}

export default BacklogGame;