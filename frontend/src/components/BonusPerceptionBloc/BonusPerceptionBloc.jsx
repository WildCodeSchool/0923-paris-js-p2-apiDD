import React from "react";
import "./bonusPerceptionBloc.css";
import joust from "../../assets/dnd_ico/joust.png";

function BonusPerceptionBloc() {
  return (
    <section id="BONUS_PERCEPTION">
      <img className="joust" id="joustUp" src={joust} alt="joust" />
      <div className="BP" id="Proficiency_bonus">
        <input type="text" className="inputBP" id="inputPB" />
        <div className="BP_container">
          <p className="BP_item"> Proficiency bonus</p>
        </div>
      </div>
      <div className="BP" id="Passive perception">
        <div className="BP_container">
          <p className="BP_item"> Passive perception</p>
        </div>
        <input type="text" className="inputBP" id="inputPP" />
      </div>
      <div className="BP" id="inspiration">
        <input type="text" className="inputBP" id="inputInsp" />
        <div className="BP_container">
          <p className="BP_item"> Inspiration</p>
        </div>
      </div>
      <img className="joust" id="joustDn" src={joust} alt="joust" />
    </section>
  );
}

export default BonusPerceptionBloc;
