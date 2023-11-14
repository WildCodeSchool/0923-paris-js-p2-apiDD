import "./characterClass.css";

function CharacterClass() {
  return (
    <div className="inputBox-class">
      <label htmlFor="characterClass">Class</label>
      <select name="classes" id="classes-select">
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

// const CharacterClass = () => {
//    const [classes, setClasses] = useState([]);

//    useEffect(() => {
//      axios
//        .get("https://www.dnd5eapi.co/api/classes")
//        .then((response) => setClasses(response.data.results))
//        .catch((error) => console.error("Error fetching classes:", error));
//    }, []);

//    return (
//      <div className="inputBox-class">
//        <label htmlFor="characterClass">Class</label>
//        <select name="class" id="class-select">
//          {classes.map((class, index) => (
//            <option key={index} value={class.index}>
//              {class.name}
//            </option>
//          ))}
//        </select>
//      </div>
//    );
//  };

export default CharacterClass;
