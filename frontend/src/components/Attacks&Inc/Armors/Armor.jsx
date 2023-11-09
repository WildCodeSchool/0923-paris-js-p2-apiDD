import React, { useState } from "react";
import "./armor.css";
import fleche from "../../../assets/dnd_ico/fleches.png";

function Armor() {
  const [name, setName] = useState("");
  const [armorclass, setArmorclass] = useState("");
  const [strenght, setStrenght] = useState("");
  const [disadvantage, setDisadvantage] = useState("");

  return (
    <div className="armor">
      <div className="armor_bloc_top">
        <h1 className="armor_heading">Armor</h1>
        <img className="fleche" src={fleche} alt="Arrow" />
      </div>
      <div className="armor_bloc_contents">
        <div className="armor_name">
          <input
            className="armor_name_input"
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="armor_class">
          <h1 className="armor_sub_heading">AC</h1>
          <input
            className="armor_class_input"
            type="text"
            id="nameInput"
            value={armorclass}
            onChange={(e) => setArmorclass(e.target.value)}
          />
        </div>

        <div className="armor_strenght">
          <h1 className="armor_sub_heading">Strenght</h1>
          <input
            className="armor_strenght_input"
            type="text"
            id="nameInput"
            value={strenght}
            onChange={(e) => setStrenght(e.target.value)}
          />
        </div>

        <div className="armor_disadvantages">
          <h1 className="armor_sub_heading">Disadvantages</h1>
          <input
            className="armor_disadvantage_input"
            type="text"
            id="nameInput"
            value={disadvantage}
            onChange={(e) => setDisadvantage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Armor;
