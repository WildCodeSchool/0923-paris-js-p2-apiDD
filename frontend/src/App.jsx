import React from "react";
import "./resetStyle.css";
import "./App.css";
import Combat from "./components/Combat/Combat";
import HealthDice from "./components/Combat/HealthDice";
import DeathSave from "./components/Combat/DeathSave";
import CaracBloc from "./components/CaracBloc/CaracBloc";
import SpellBloc from "./components/SpellBloc/SpellBloc";
import EquipmentBloc from "./components/EquipmentBloc/EquipmentBloc";
import AttackNinc from "./components/Attacks&Inc/AttackNinc";
import { CharacterProvider } from "./context/CharacterContext";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <CharacterProvider>
      <div className="result">
        <HomePage />
        <CaracBloc />
        <Combat />
        <DeathSave />
        {window.innerWidth < 1024 && <HealthDice />}
        <HealthDice />
        <AttackNinc />
        <SpellBloc />
        <EquipmentBloc />
      </div>
    </CharacterProvider>
  );
}

export default App;
