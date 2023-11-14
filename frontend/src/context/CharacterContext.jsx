import { createContext, useContext, useState, useMemo } from "react";
import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // STATS
  const [character, setCharacter] = useState(new CharacterData());
  const [playerClass, setPlayerClass] = useState(null);
  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE

  const value = useMemo(
    () => ({ character, setCharacter, playerClass, setPlayerClass }),
    [character, playerClass]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
