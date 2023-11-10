import React from "react";
import "./resetStyle.css";
import "./App.css";

import AttackNinc from "./components/Attacks&Inc/AttackNinc";

import CaracBloc from "./components/CaracBloc/CaracBloc";
// import CaracBloc from "./components/CaracBloc/CaracBloc";
// import EquipmentBloc from "./components/EquipmentBloc/EquipmentBloc";

function App() {
  return (
    <div className="result_s">
      <CaracBloc />
      <AttackNinc />
      {/* <EquipmentBloc /> */}
      {/* <CaracBloc /> */}
    </div>
  );
}

export default App;
