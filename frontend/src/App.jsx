import React from "react";
import "./resetStyle.css";
import "./App.css";
import CaracSeg from "./components/CaracSeg/CaracSeg";
// import Weaponz from "./components/Weapons/weaponz";
import AttackNinc from "./components/Attacks&Inc/AttackNinc";

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
      <div> </div>
      <CaracSeg />
      <AttackNinc />
      {/* <Weaponz /> */}
    </>
  );
}

export default App;
