import React from "react";
import "./resetStyle.css";
import "./App.css";
import "./assets/stylesheets/characterSheet_general.css";
import CharacterInfo from "./components/Characterinfo/CharacterInfo";
import Combat from "./components/Combat/Combat";
import HealthDice from "./components/Combat/HealthDice";
import CaracBloc from "./components/CaracBloc/CaracBloc";
import SpellBloc from "./components/SpellBloc/SpellBloc";
import EquipmentBloc from "./components/EquipmentBloc/EquipmentBloc";
import BonusPerceptionBloc from "./components/BonusPerceptionBloc/BonusPerceptionBloc";
import AttackNinc from "./components/Attacks&Inc/AttackNinc";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <div className="result" id="CHARACTERS_SHEET">
        <CharacterInfo id="CompCharacterInfo" />
        <BonusPerceptionBloc id="CompBonusPerceptionBloc" />
        <CaracBloc id="CompCaracBloc" />
        <Combat id="CompCombat" />
        {window.innerWidth < 1024 && <HealthDice />}
        <AttackNinc id="CompAttackNinc" />
        <SpellBloc id="CompSpellBloc" />
        <EquipmentBloc id="CompEquipmentBloc" />
      </div>
    </CharacterProvider>
  );
}

export default App;
