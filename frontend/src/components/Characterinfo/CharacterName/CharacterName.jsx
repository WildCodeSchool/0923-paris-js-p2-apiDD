import React, { useState } from "react";
import "./characterName.css";

function CharacterName() {
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="characterName">
      <label htmlFor="characterName">CHARACTER NAME</label>
      <input
        type="text"
        name="characterName"
        value={name}
        onChange={changeName}
        placeholder="Chose your name..."
      />
    </div>
  );
}

export default CharacterName;
