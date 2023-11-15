import React from "react";
import "./spellBloc.css";
import TestLevelSpellBloc from "./TestLevelSpellBloc";
import Wizard from "../../assets/dnd_ico/wizard.png";

const SpellsList = [
  {
    spellLvlTitle: "SPELLS - LVL 0",
  },
  {
    spellLvlTitle: "SPELLS - LVL 1",
  },
  {
    spellLvlTitle: "SPELLS - LVL 2",
  },
];

function SpellBloc() {
  return (
    <section id="SPELLS">
      <div id="wizard_ico_">
        <img id="wizard_ico" src={Wizard} alt="wizard icone" />
      </div>
      <div className="spells_bloc">
        <h1 className="spells_bloc_title">SPELLS</h1>
        <div id="spell_area_screen">
          {SpellsList.map((spells) => (
            <TestLevelSpellBloc
              key={spells.spellLvlTitle}
              id={spells.spellLvlTitle}
              title={spells.spellLvlTitle}
            />
          ))}
        </div>
        {/* <div id="spell_area_print"> </div>
        <div id="wizard_ico_print_">
          <img id="wizard_ico_print" src={Wizard} alt="wizard icone" />
        </div> */}
      </div>
    </section>
  );
}

export default SpellBloc;
