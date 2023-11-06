import React, { useState } from "react";
import "./weapon.css";

function Weapon() {
  const [name, setName] = useState("");
  const [bonus, setBonus] = useState();
  const [combat, setCombat] = useState("");
  const [nameSec, setNameSec] = useState("");
  const [bonusSec, setBonusSec] = useState();
  const [combatSec, setCombatSec] = useState("");
  const [nameThird, setNameThird] = useState("");
  const [bonusThird, setBonusThird] = useState();
  const [combatThird, setCombatThird] = useState("");
  return (
    <div className="weapons">
      <div className="weapon_fr">
        <div>
          <h1>Name</h1>
          <input
            className="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="bonus_combat_fr">
          <div>
            <h1>ATK Bonus</h1>
            <input
              className="bonus"
              type="text"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            />
          </div>
          <div>
            <h1>Combat/ Type</h1>
            <input
              className="combat"
              type="text"
              value={combat}
              onChange={(e) => setCombat(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="weapon_sec">
        <div>
          <h1>Name</h1>
          <input
            className="name"
            type="text"
            value={nameSec}
            onChange={(e) => setNameSec(e.target.value)}
          />
        </div>

        <div className="bonus_combat_sec">
          <div>
            <h1>ATK Bonus</h1>
            <input
              className="bonus"
              type="text"
              value={bonusSec}
              onChange={(e) => setBonusSec(e.target.value)}
            />
          </div>
          <div>
            <h1>Combat/ Type</h1>
            <input
              className="combat"
              type="text"
              value={combatSec}
              onChange={(e) => setCombatSec(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="weapon_third">
        <div>
          <h1>Name</h1>
          <input
            className="name"
            type="text"
            value={nameThird}
            onChange={(e) => setNameThird(e.target.value)}
          />
        </div>

        <div className="bonus_combat_third">
          <div>
            <h1>ATK Bonus</h1>
            <input
              className="bonus"
              type="text"
              value={bonusThird}
              onChange={(e) => setBonusThird(e.target.value)}
            />
          </div>
          <div>
            <h1>Combat/ Type</h1>
            <input
              className="combat"
              type="text"
              value={combatThird}
              onChange={(e) => setCombatThird(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weapon;
