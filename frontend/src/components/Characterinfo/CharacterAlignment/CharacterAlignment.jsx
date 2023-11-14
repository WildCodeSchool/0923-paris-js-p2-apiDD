import "./characterAlignment.css";

function CharacterAlignment() {
  return (
    <div className="inputBox-alignment">
      <label htmlFor="characterAlignment">Alignment</label>
      <select name="alignment" id="alignment-select">
        {" "}
        {/* <option value="">--Please choose an option--</option>{" "} */}
        <option value="loyal">Loyal</option>
        <option value="neutral">Neutral</option>{" "}
        <option value="chaotic">Chaotic</option>{" "}
        <option value="good">Good</option>{" "}
        <option value="neutral">Neutral</option>{" "}
        <option value="chaotic">Chaotic</option>{" "}
      </select>
    </div>
  );
}

export default CharacterAlignment;
