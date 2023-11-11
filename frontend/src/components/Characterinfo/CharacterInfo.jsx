import CharacterName from "./CharacterName/CharacterName";
import CharacterLevel from "./CharacterLevel/CharacterLevel";
import CharacterPx from "./ChacaterPx/CharacterPx";
import CharacterClass from "./CharacterClass/CharacterClass";
import CharacterRace from "./CharacterRace/CharacterRace";
import CharacterAlignment from "./CharacterAlignment/CharacterAlignment";
import dragon from "../../assets/dnd_ico/dragon.png";
import Arrow from "../../assets/dnd_ico/Arrow_6.png";
import reddragon from "../../assets/dnd_ico/D&D-3.png";
import "./characterinfo.css";

function CharacterInfo() {
  const isMobile = window.innerWidth < 1024;
  return (
    <form className="newCharacter_form">
      <img src={reddragon} className="reddragon" alt="reddragon-input" />
      <div className="characterName_container">
        <CharacterName />
      </div>
      <div className="form_container">
        <div className="form_inner">
          {!isMobile && <img src={Arrow} className="Arrow" alt="Arrow-input" />}
          <img src={dragon} className="dragon" alt="dragon-input" />
          <CharacterRace />
          <CharacterClass />
          <CharacterAlignment />
          <CharacterLevel />
          <CharacterPx />
        </div>
      </div>
    </form>
  );
}

export default CharacterInfo;
