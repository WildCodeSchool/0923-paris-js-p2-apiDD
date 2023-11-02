import React from "react";
import "./caracBloc.css";
import CaracSeg from "../CaracSeg/CaracSeg";

function CaracBloc() {
  const caracs = [
    {
      caracName: "STR",
      caracValue: "10",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "DEX",
      caracValue: "11",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "WIS",
      caracValue: "12",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "INT",
      caracValue: "13",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CHAR",
      caracValue: "14",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CONST",
      caracValue: "15",
      caracBonus: "+0",
      caracSave: "+0",
    },
  ];

  return (
    <div className="carac_Bloc">
      {caracs.map((carac) => (
        <CaracSeg
          key={carac.caracName}
          name={carac.caracName}
          value={carac.caracValue}
          bonus={carac.caracBonus}
          save={carac.caracSave}
        />
      ))}
    </div>
  );
}

export default CaracBloc;
