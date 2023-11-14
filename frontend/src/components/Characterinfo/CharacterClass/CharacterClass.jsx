import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterClass.css";

function CharacterClass() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/classes")
      .then((response) => setClasses(response.data.results))
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  return (
    <div className="inputBox-class">
      <label htmlFor="characterClass">Class</label>
      <select name="class" id="class-select">
        {classes.map((playerClass) => (
          <option key={playerClass.name} value={playerClass.index}>
            {playerClass.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterClass;
