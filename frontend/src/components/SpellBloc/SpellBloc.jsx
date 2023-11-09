import React from "react";
import "./spellBloc.css";
import LevelSpellBloc from "./LevelSpellBloc";
import Wizard from "../../assets/dnd_ico/wizard.png";

const SpellsList = [
  {
    spellLvlTitle: "SPELLS - LVL 0",
    spell1: {
      name: "lvl/0 - spell 1",
    },
    spell2: {
      name: "lvl/0 - spell 2",
    },
    spell3: {
      name: "lvl/0 - spell 3",
    },
  },
  {
    spellLvlTitle: "SPELLS - LVL 1",
    spell1: {
      name: "lvl/1 - spell 1",
    },
    spell2: {
      name: "lvl/1 - spell 2",
    },
  },
  {
    spellLvlTitle: "SPELLS - LVL 2",
    spell1: {
      name: "lvl/2 - spell 1",
    },
  },
];

function SpellBloc() {
  return (
    <section className="SPELLS">
      <div id="wizard_ico_">
        <img id="wizard_ico" src={Wizard} alt="wizard icone" />
      </div>
      <div className="spells_bloc">
        <h1 className="spells_bloc_title">SPELLS</h1>
        <div className="spell_area">
          {SpellsList.map((spells) => (
            <LevelSpellBloc
              key={spells.spellLvlTitle}
              id={spells.spellLvlTitle}
              title={spells.spellLvlTitle}
              spell1={spells.spell1}
              spell2={spells.spell2}
              spell3={spells.spell3}
            />
          ))}
        </div>
        <div id="wizard_ico_print_">
          <img id="wizard_ico_print" src={Wizard} alt="wizard icone" />
        </div>
      </div>
    </section>
  );
}

export default SpellBloc;
