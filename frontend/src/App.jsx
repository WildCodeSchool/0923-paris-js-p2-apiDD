import React from "react";
import "./resetStyle.css";
import "./App.css";
import Combat from "./components/Combat/Combat";
import HealthDice from "./components/Combat/HealthDice";
import DeathSave from "./components/Combat/DeathSave";
import CaracBloc from "./components/CaracBloc/CaracBloc";
import SpellBloc from "./components/SpellBloc/SpellBloc";
import EquipmentBloc from "./components/EquipmentBloc/EquipmentBloc";
import BonusPerceptionBloc from "./components/BonusPerceptionBloc/BonusPerceptionBloc";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <div className="result">
        <CaracBloc />
        <BonusPerceptionBloc />
        <Combat />
        <DeathSave />
        {window.innerWidth < 1024 && <HealthDice />}
        <HealthDice />
        <SpellBloc />
        <EquipmentBloc />
      </div>
    </CharacterProvider>
  );
}

export default App;
