import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterRace.css";

// function CharacterRace() {
//   return (
//     <div className="inputBox-race">
//       <label htmlFor="characterRace">Race</label>
//       <select name="race" id="race-select">
//         {" "}
//         <option value="human">Human</option>{" "}
//         <option value="dwarf">Dwarf</option> <option value="elf">Elf</option>{" "}
//         <option value="gnome">Gnome</option>{" "}
//         <option value="half-elf">Half-elf</option>{" "}
//         <option value="half-orc">Half-orc</option>{" "}
//         <option value="halfling">Halfling</option>{" "}
//         <option value="dragonborn">Dragonborn</option>{" "}
//         <option value="eladrin">Eladrin</option>{" "}
//         <option value="tiefling">Tiefling</option>{" "}
//       </select>
//     </div>

//   );
// }

// CharacterForm.js

function CharacterRace() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((response) => setRaces(response.data.results))
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  return (
    <div className="inputBox-race">
      <label htmlFor="characterRace">Race</label>
      <select name="race" id="race-select">
        {races.map((race) => (
          <option key={race.name} value={race.index}>
            {race.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterRace;
