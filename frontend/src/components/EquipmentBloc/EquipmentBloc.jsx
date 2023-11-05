import React from "react";
import "../../assets/variables.css";
import "./equipmentBloc.css";
import MoneySeg from "./MoneySeg/MoneySeg";

function EquipmentBloc() {
  const purses = [
    { purseName: "PP", PurseValue: "0" },
    { purseName: "GP", PurseValue: "0" },
    { purseName: "EP", PurseValue: "0" },
    { purseName: "SP", PurseValue: "0" },
    { purseName: "SP", PurseValue: "0" },
  ];
  return (
    <div id="equipment_bloc">
      <p id="equipment_title">Equipment</p>
      <div id="stuff_area">
        <ul id="stuff_ul">
          <li className="stuff_item">stuff 1</li>
          <li className="stuff_item">stuff 2</li>
          <li className="stuff_item">stuff 3</li>
          <li className="stuff_item">stuff 4</li>
          <li className="stuff_item">stuff 5</li>
        </ul>
      </div>
      <div id="money_aera">
        {purses.map((purse) => (
          <MoneySeg
            key={purse.purseName}
            id={purse.purseName}
            name={purse.purseName}
            value={purse.PurseValue}
          />
        ))}
      </div>
    </div>
  );
}

export default EquipmentBloc;
