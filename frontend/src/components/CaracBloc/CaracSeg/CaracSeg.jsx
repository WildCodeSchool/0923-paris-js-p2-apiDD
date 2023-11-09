import React, { useState } from "react";
import "../../../assets/variables.css";
import "./caracSeg.css";
import FlagBtn from "./FlagBtn";
import ArrowLine2 from "../../../assets/dnd_ico/ArrowLine_2.png";

function CaracSeg(props) {
  const { name, id, caraClass, skills } = props;
  const isFlagBtnHidden = id === "CONST";
  const showArrowLine = id !== "CHAR";

  const [caracNum, setCaracNum] = useState(8);
  const handleCaracNumChange = (e) => {
    setCaracNum(e.target.value);
  };

  // eslint-disable-next-line consistent-return
  function strBonus() {
    const bonus = Math.floor((caracNum - 10) / 2);
    if (bonus < 0 || bonus === 0) {
      return `${bonus.toString()}`;
    }
    if (bonus > 0) {
      return `+${bonus.toString()}`;
    }
  }

  const saveBonus = strBonus;

  return (
    <>
      <div className="carac_segment" id={id}>
        {/* // top // */}
        <div className="carac_num_container">
          <input
            type="text"
            className="carac_num_container carac_num"
            value={caracNum}
            onChange={handleCaracNumChange}
          />
        </div>
        {/* // main // */}
        <div className="carac_main_content">
          <p className="carac_title">{name}</p>
          <div className="carac_bonus_content">
            <p className={`carac_bonus ${caraClass}`}>{strBonus()}</p>
          </div>
        </div>
        {/* // bottom // */}
        <div className="bonus_save_content">
          <p className="bonus_save">save</p>
          <p className="bonus_save_num">{saveBonus()}</p>
        </div>
        {!isFlagBtnHidden && <FlagBtn id="goPopUp" skills={skills} />}
      </div>
      {showArrowLine && (
        <div id="caracs_arrow_line_2">
          <img src={ArrowLine2} alt="-" />
        </div>
      )}
    </>
  );
}

export default CaracSeg;
