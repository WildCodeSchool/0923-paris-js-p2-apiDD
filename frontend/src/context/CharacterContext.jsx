import { createContext, useContext, useState, useMemo } from "react";
// import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // CHAR INFOS
  // const [character, setCharacter] = useState(new CharacterData());
  const [playerClass, setPlayerClass] = useState("barbarian");
  const [playerRace, setPlayerRace] = useState("humain");
  const [playerLevel, setPlayerLevel] = useState(1);

  // STATS
  const [caracs, setCaracs] = useState([
    {
      caracName: "STR",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "DEX",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CONST",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "WIS",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "INT",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CHAR",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
  ]);
  // const [character, setCharacter] = useState(new CharacterData());

  // HEALTH
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE
  // Theme
  const [color, setColor] = useState("red");

  const value = useMemo(
    () => ({
      playerClass,
      setPlayerClass,
      playerRace,
      setPlayerRace,
      color,
      setColor,
      caracs,
      setCaracs,
      playerLevel,
      setPlayerLevel,
    }),
    [playerClass, playerRace, playerLevel, color, caracs]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
