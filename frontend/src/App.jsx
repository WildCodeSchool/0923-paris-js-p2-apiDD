import React from "react";
import "./resetStyle.css";
import "./App.css";
import Combat from "./components/Combat/Combat";
// import DeathSave from "./components/Combat/DeathSave";
import HealthDice from "./components/Combat/HealthDice";
import CaracBloc from "./components/CaracBloc/CaracBloc";

function App() {
  return (
    <div className="result">
      <CaracBloc />
      <Combat />
      {/* <DeathSave /> */}
      {window.innerWidth < 1024 && <HealthDice />}
      {/* <HealthDice /> */}
    </div>
  );
}

export default App;
