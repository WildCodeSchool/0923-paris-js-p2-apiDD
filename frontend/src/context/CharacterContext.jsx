import { createContext, useContext, useState, useMemo } from "react";
// import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // const [character, setCharacter] = useState(new CharacterData());

  // STATS
  const [playerClass, setPlayerClass] = useState(null);
  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE

  // character, setCharacter,
  const value = useMemo(() => ({ playerClass, setPlayerClass }), [playerClass]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
