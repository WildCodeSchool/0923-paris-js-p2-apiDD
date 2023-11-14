import React, { useState, useEffect } from "react";
import axios from "axios";
import "./spellBloc.css";
import LittleArrow from "../../assets/dnd_ico/fleches.png";

function LevelSpellBloc(props) {
  const { title, id } = props;

  //   gestion API
  const [spells0, setSpells0] = useState([]);
  const [spells1, setSpells1] = useState([]);
  const [spells2, setSpells2] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=0")
      .then((response) => setSpells0(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=1")
      .then((response) => setSpells1(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=2")
      .then((response) => setSpells2(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  // gestion toggle
  const [isSpellListVisible, setSpellListVisible] = useState(false);
  const toggleSpellList = () => {
    setSpellListVisible(!isSpellListVisible);
  };

  return (
    <div id={id} className="spells_lvls">
      <div className="spell_bloc_top_line">
        <h2 className="spell_lvl_title">{title} </h2>
        {/* arrow for toggle */}
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

      {/* Spells Lists by level */}
      {title === "SPELLS - LVL 0" && isSpellListVisible && (
        <div className="spells_list">
          <label htmlFor="Spells_Level_0"> </label>
          <select name="spell0" className="spell_item">
            {spells0.map((spell0) => (
              <option key={spell0.index} value={spell0.index}>
                {spell0.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {title === "SPELLS - LVL 1" && isSpellListVisible && (
        <div className="spells_list">
          <label htmlFor="Spells_Level_1"> </label>
          <select name="spell1" className="spell_item">
            {spells1.map((spell1) => (
              <option key={spell1.index} value={spell1.index}>
                {spell1.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {title === "SPELLS - LVL 2" && isSpellListVisible && (
        <div className="spells_list">
          <label htmlFor="Spells_Level_2"> </label>
          <select name="spell2" className="spell_item">
            {spells2.map((spell2) => (
              <option key={spell2.index} value={spell2.index}>
                {spell2.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default LevelSpellBloc;
