import React from "react";
import "./resetStyle.css";
import "./App.css";
import CaracSeg from "./components/CaracSeg/CaracSeg";
import Combat from "./components/Combat/Combat";
// import DeathSave from "./components/Combat/DeathSave";
import HealthDice from "./components/Combat/HealthDice";

function App() {
  // const caracs = [
  //   {
  //     name: "STR",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  //   {
  //     name: "DEX",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  //   {
  //     name: "WIS",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  //   {
  //     name: "INT",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  //   {
  //     name: "CHAR",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  //   {
  //     name: "CONST",
  //     value: "10",
  //     bonus: "+0",
  //     save: "+0",
  //   },
  // ];

  return (
    <>
      <CaracSeg />
      <Combat />
      {/* <DeathSave /> */}
      {window.innerWidth < 1024 && <HealthDice />}
    </>
  );
}

export default App;
