import { createContext, useContext, useState, useMemo } from "react";
// import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // STATS
  const [str, setStr] = useState(18);
  const [dex, setDex] = useState(18);
  const [con, setCon] = useState(15);
  const [int, setInt] = useState(11);
  const [wis, setWis] = useState(12);
  const [char, setChar] = useState(14);
  // CHAR INFOS
  // const [character, setCharacter] = useState(new CharacterData());
  const [playerClass, setPlayerClass] = useState(null);
  const [playerRace, setPlayerRace] = useState(null);
  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE

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
    }),
    [playerClass, playerRace, str, dex, int, wis, char, con]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
