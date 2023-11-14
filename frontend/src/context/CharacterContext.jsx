import { createContext, useContext, useState, useMemo } from "react";
import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // STATS
  const [character, setCharacter] = useState(new CharacterData());
  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE

  const value = useMemo(
    () => ({ character, setCharacter }),
    [character, setCharacter]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
