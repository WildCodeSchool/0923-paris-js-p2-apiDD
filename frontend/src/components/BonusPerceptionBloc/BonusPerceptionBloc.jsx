import React from "react";
import "./bonusPerceptionBloc.css";
import joust from "../../assets/dnd_ico/joust.png";
import knife from "../../assets/dnd_ico/epee.png";
import Dragon from "../../assets/dnd_ico/dragon_2.png";

function BonusPerceptionBloc() {
  return (
    <>
      <section id="BONUS_PERCEPTION">
        <img className="joust" id="joustUp" src={joust} alt="joust" />
        <div className="BP" id="Proficiency_bonus">
          <input type="text" className="inputBP" id="inputPB" />
          <div className="BP_container">
            <p className="BP_item"> Proficiency bonus</p>
          </div>
        </div>
        <div className="BP" id="Passive_perception">
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

      <section id="BONUS_PERCEPTION_DESKTOP">
        <div className="BPD_line1">
          <div className="BP" id="Proficiency_bonus">
            <input type="text" className="inputBP" id="inputPB" />
            <div className="BP_container">
              <p className="BP_item"> Proficiency bonus</p>
            </div>
          </div>
          <div className="knife_position">
            <img className="knife_Ico" src={knife} alt="knife" />
          </div>
          <div className="BP" id="Passive_perception">
            <div className="BP_container">
              <p className="BP_item"> Passive perception</p>
            </div>
            <input type="text" className="inputBP" id="inputPP" />
          </div>
        </div>
        <div className="BPD_line2">
          <img
            src={Dragon}
            alt="Dragon"
            className="Dragon_ico"
            id="Dragon_left"
          />
          <div className="BP" id="inspiration">
            <input type="text" className="inputBP" id="inputInsp" value={0} />
            <div className="BP_container">
              <p className="BP_item"> Inspiration</p>
            </div>
          </div>
          <img
            src={Dragon}
            alt="Dragon"
            className="Dragon_ico"
            id="Dragon_right"
          />
        </div>
      </section>
    </>
  );
}

export default BonusPerceptionBloc;
