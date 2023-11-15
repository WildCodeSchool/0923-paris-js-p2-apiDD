import "./characterClass.css";
import useCharacter from "../../../context/CharacterContext";

function CharacterClass() {
  const { setPlayerClass } = useCharacter();
  return (
    <div className="inputBox-class">
      <label htmlFor="characterClass">Class</label>
      <select
        name="classes"
        id="classes-select"
        onChange={(e) => setPlayerClass(e.target.value)}
      >
        {" "}
        <option value="barbarian">Barbarian</option>
        <option value="cleric">Cleric</option>{" "}
        <option value="druid">Druid</option>{" "}
        <option value="fighter">Fighter</option>{" "}
        <option value="monk">Monk</option>{" "}
        <option value="paladin">Paladin</option>{" "}
        <option value="ranger">Ranger</option>{" "}
        <option value="rogue">Rogue</option>{" "}
        <option value="sorcerer">Sorcerer</option>{" "}
        <option value="warlock">Warlock</option>{" "}
        <option value="wizard">Wizard</option>{" "}
      </select>
    </div>
  );
}

export default CharacterClass;
