import React from "react";
import MagicWand from "../../../assets/dnd_ico/baguette-magique.png";
import "./spellPopUp.css";

function SpellPopUp(props) {
  const {
    name,
    range,
    components,
    duration,
    castingTime,
    description,
    damage,
  } = props;
  return (
    <section id="spells_PopUp">
      <div className="spell_bloc_bkg">
        <div className="spell_pop_up_content">
          <h2 className="spell_item_title">{name}</h2>
          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">Range : {range}</p>
          <p className="spell_item_infos">
            Components : {components && components.join(", ")}
          </p>
          <p className="spell_item_infos">Casting time : {castingTime}</p>
          <p className="spell_item_infos">Duration : {duration}</p>
          {damage && <p className="spell_item_infos">damage : {damage}</p>}
          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">Description :</p>
          <p className="spell_item_desc">{description}</p>
          <div id="MagicWand_ico_down">
            <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpellPopUp;
