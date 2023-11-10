import "./characterRace.css";

function CharacterRace() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  // const options = ["Option 1", "Option 2", "Option 3"];

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   setIsDropdownOpen(false);
  // };

  return (
    <div className="inputBox-race">
      <label htmlFor="characterRace">Race</label>
      <select name="race" id="race-select">
        {" "}
        <option value="human">Human</option>{" "}
        <option value="dwarf">Dwarf</option> <option value="elf">Elf</option>{" "}
        <option value="gnome">Gnome</option>{" "}
        <option value="half-elf">Half-elf</option>{" "}
        <option value="half-orc">Half-orc</option>{" "}
        <option value="halfling">Halfling</option>{" "}
        <option value="dragonborn">Dragonborn</option>{" "}
        <option value="eladrin">Eladrin</option>{" "}
        <option value="tiefling">Tiefling</option>{" "}
      </select>
    </div>

    // <div className="editable-block">
    //   <div className="textarea-content" onClick={toggleDropdown}>
    //     {selectedOption || "Select an option"}
    //   </div>
    //   {isDropdownOpen && (
    //     <ul className="dropdown-options">
    //       {options.map((option, index) => (
    //         <li key={index} onClick={() => handleOptionSelect(option)}>
    //           {option}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
}

export default CharacterRace;
