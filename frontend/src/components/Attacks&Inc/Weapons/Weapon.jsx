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
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading">Name</h1>
          <input
            className="name_input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="bonus_combat">
          <div>
            <h1 className="weapon_sub_heading">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            />
          </div>
          <div>
            <h1 className="weapon_sub_heading">Combat/ Type</h1>
            <input
              className="combat_input"
              type="text"
              value={combat}
              onChange={(e) => setCombat(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="weapon_sec">
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading">Name</h1>
          <input
            className="name_input"
            type="text"
            value={nameSec}
            onChange={(e) => setNameSec(e.target.value)}
          />
        </div>

        <div className="bonus_combat">
          <div>
            <h1 className="weapon_sub_heading">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={bonusSec}
              onChange={(e) => setBonusSec(e.target.value)}
            />
          </div>
          <div>
            <h1 className="weapon_sub_heading">Combat/ Type</h1>
            <input
              className="combat_input"
              type="text"
              value={combatSec}
              onChange={(e) => setCombatSec(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="weapon_third">
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading">Name</h1>
          <input
            className="name_input"
            type="text"
            value={nameThird}
            onChange={(e) => setNameThird(e.target.value)}
          />
        </div>

        <div className="bonus_combat">
          <div>
            <h1 className="weapon_sub_heading">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={bonusThird}
              onChange={(e) => setBonusThird(e.target.value)}
            />
          </div>
          <div>
            <h1 className="weapon_sub_heading">Combat/ Type</h1>
            <input
              className="combat_input"
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
