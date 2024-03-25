import React, { useState, ChangeEvent, useEffect } from 'react'
import BacklogGame from './BacklogGame';
import { IGame, IConsoles } from '../Interfaces';

export const GameList: React.FC = () => {

  const [game, setGame] = useState<string>("");
  const [console, setConsole] = useState<string>("");
  const [backlog, setBacklog] = useState<IGame[]>([]);
  const [consoles, setConsoles] = useState<IConsoles[]>([]);

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

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then((response) => response.json())
      .then((result) => setBacklog(result))
    // .catch((error) => console.log("error", error))
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/consoles")
      .then((response) => response.json())
      .then((result) => setConsoles(result))
    // .catch((error) => console.log("error", error))
  }, []);

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
        {/* {consoles.map((con: IConsoles, key: number) => {
          <option key={key} value={con} />
        })} */}
      </datalist>

      <button className="add-button" onClick={addGame}>Add</button>
      <div className='backlog-list'>
        <div className="grid-row">
          <div className="grid-item head">Game</div>
          <div className="grid-item head">Console</div>
          <div className="grid-item head">Remove?</div>
        </div>
        {backlog.map((game: IGame, key: number) => {
          return <BacklogGame key={key} game={game} deleteGame={deleteGame} />
        })}
      </div>
    </div>
  )
}
