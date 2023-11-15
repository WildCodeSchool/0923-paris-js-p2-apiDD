import { createContext, useContext, useState, useMemo } from "react";
// import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // const [character, setCharacter] = useState(new CharacterData());

  // STATS
  const [str, setStr] = useState(10);
  const [dex, setDex] = useState(10);
  const [con, setCon] = useState(10);
  const [int, setInt] = useState(10);
  const [wis, setWis] = useState(10);
  const [char, setChar] = useState(10);
  // CHAR INFOS
  // const [character, setCharacter] = useState(new CharacterData());
  const [playerClass, setPlayerClass] = useState(null);
  const [playerRace, setPlayerRace] = useState(null);
  // console.log(playerClass);

  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE
  // Theme
  const [color, setColor] = useState("red");

  const value = useMemo(
    () => ({
      str,
      setStr,
      dex,
      setDex,
      con,
      setCon,
      int,
      setInt,
      wis,
      setWis,
      char,
      setChar,
      playerClass,
      setPlayerClass,
      playerRace,
      setPlayerRace,
      color,
      setColor,
    }),
    [playerClass, playerRace, str, dex, int, wis, char, con, color]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
