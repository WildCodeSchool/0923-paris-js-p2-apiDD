import React from "react";
import "./resetStyle.css";
import "./App.css";

import AttackNinc from "./components/Attacks&Inc/AttackNinc";

import CaracBloc from "./components/CaracBloc/CaracBloc";

function App() {
  return (
    <div className="result_s">
      <CaracBloc />
      <AttackNinc />
    </div>
  );
}

export default App;
