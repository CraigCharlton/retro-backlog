import React, { useState, ChangeEvent } from 'react'
import BacklogGame from './BacklogGame';
import { IGame } from '../Interfaces';

export const GameList: React.FC = () => {

  const [game, setGame] = useState<string>("");
  const [console, setConsole] = useState<string>("");
  const [backlog, setBacklog] = useState<IGame[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "game") {
      setGame(event.target.value);
    } else {
      setConsole(event.target.value);
    }
  }

  const addGame = (): void => {
    const newGame = {
      gameName: game,
      console: console
    };
    setBacklog([...backlog, newGame])
    setGame("");
    setConsole("");
  }

  const deleteGame = (gameNameToDelete: string): void => {
    setBacklog(backlog.filter((game) => {
      return game.gameName !== gameNameToDelete
    }))
  }

  return (
    <div className="main-container">
      <h1>Game List</h1>
      <input type="text"
        placeholder='Game...'
        name='game'
        value={game}
        onChange={handleChange} />

      <input type="text"
        list="console"
        placeholder='Console...'
        name='console'
        value={console}
        onChange={handleChange} />

      <datalist id="console">
        <option value="Megadrive" />
        <option value="N64" />
        <option value="Gamecube" />
        <option value="SNES" />
        <option value="Dreamcast" />
      </datalist>

      <button onClick={addGame}>Add</button>

      <div className='backlogList'>
        {backlog.map((game: IGame, key: number) => {
          return <BacklogGame key={key} game={game} deleteGame={deleteGame} />
        })}
      </div>
    </div>
  )
}
