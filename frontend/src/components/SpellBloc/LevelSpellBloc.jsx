import { useState } from "react";
import "./spellBloc.css";
import LittleArrow from "../../assets/dnd_ico/fleches.png";

function LevelSpellBloc(props) {
  const { title, id, spell1, spell2, spell3 } = props;

  // Utilisez un état local pour suivre l'état de visibilité de la liste de sorts
  const [isSpellListVisible, setSpellListVisible] = useState(false);

  // Fonction pour basculer l'état de visibilité
  const toggleSpellList = () => {
    setSpellListVisible(!isSpellListVisible);
  };

  return (
    <div id={id} className="spells_lvls">
      <div className="spell_bloc_top_line">
        <h2 className="spell_lvl_title">{title} </h2>
        {!isSpellListVisible && (
          <img
            className="arrow_btn_open"
            src={LittleArrow}
            alt="arrow toggle button open"
            onClick={toggleSpellList}
          />
        )}
        {isSpellListVisible && (
          <img
            className="arrow_btn_closed"
            src={LittleArrow}
            alt="arrow toggle button closed"
            onClick={toggleSpellList}
          />
        )}
      </div>
      {isSpellListVisible && (
        <div className="spells_list">
          <div className="spell" id={spell1.name}>
            <div className="spell_container">
              <p className="spell_item">{spell1.name}</p>
            </div>
          </div>
          {spell2 && (
            <div className="spell" id={spell2.name}>
              <div className="spell_container">
                <p className="spell_item">{spell2.name}</p>
              </div>
            </div>
          )}
          {spell3 && (
            <div className="spell" id={spell3.name}>
              <div className="spell_container">
                <p className="spell_item">{spell3.name}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LevelSpellBloc;
