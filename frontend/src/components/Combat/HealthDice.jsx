import { useState } from "react";
import "./HealthDice.css";
import diceImg from "../../assets/dnd_ico/d20.png";

function HealthDice() {
  const [healthDiceNumber, setHealthDiceNumber] = useState(0);
  const [healthDice, setHealthDice] = useState("");

  const handleHealthDiceChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    const validValues = ["4", "6", "8", "10", "12", "1", ""];
    if (validValues.includes(numericValue)) {
      setHealthDice(`D${numericValue}`);
    }
  };

  const decreaseDiceNumber = () => {
    if (healthDiceNumber > 0) {
      setHealthDiceNumber(parseInt(healthDiceNumber, 10) - 1);
    }
  };
  const increaseDiceNumber = () => {
    setHealthDiceNumber(parseInt(healthDiceNumber, 10) + 1);
  };

  return (
    <div className="healthDiceBlock">
      <img src={diceImg} alt="dice" className="Dice" />

      <div className="healthDiceNumber">
        <p>Nb of</p>
        <div className="addRemoveDiceNumber">
          <button
            type="button"
            className="addDice"
            onClick={decreaseDiceNumber}
          >
            -
          </button>
          <input
            type="text"
            value={healthDiceNumber}
            className="healthDiceNumberInput"
            onChange={(e) => {
              const numericValue = parseInt(e.target.value, 10);
              if (!Number.isNaN(numericValue) && numericValue >= 0) {
                setHealthDiceNumber(numericValue);
              }
            }}
          />
          <button
            type="button"
            className="addDice"
            onClick={increaseDiceNumber}
          >
            +
          </button>
        </div>
      </div>
      <div className="healthDice">
        <p>HP Dice</p>
        <input
          type="text"
          value={healthDice}
          onChange={handleHealthDiceChange}
          className="healthDiceInput"
        />
      </div>
    </div>
  );
}

export default HealthDice;
