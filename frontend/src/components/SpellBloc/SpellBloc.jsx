import React from "react";
import "./spellBloc.css";
import LittleArrow from "../../assets/dnd_ico/fleches.png";

function SpellBloc() {
  return (
    <div className="spells_bloc">
      <h1 className="spells_bloc_title">SPELLS</h1>
      <div className="spell_bloc">
        <div className="spell_bloc_top_line">
          <h2 className="spell_lvl_title">SPELLS - LVL 0 </h2>
          <img
            className="arrow_btn_closed"
            src={LittleArrow}
            alt="arrow toggle btn closed"
          />
        </div>
        <div className="spells_list">
          <div className="spell_container">
            <p className="spell_item">spell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpellBloc;
