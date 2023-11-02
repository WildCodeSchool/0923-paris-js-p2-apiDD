import React from "react";
import "../../assets/variables.css";
import "./caracSeg.css";
import medievalBtn from "../../assets/dnd_ico/medieval.png";

function CaracSeg(props) {
  const { name, value, bonus, save } = props;

  return (
    <div className="carac_segment">
      {/* // top // */}
      <div className="carac_num_container">
        <p className="carac_num">{value}</p>
      </div>
      {/* // main // */}
      <div className="carac_main_content">
        <p className="carac_title">{name}</p>
        <div className="carac_bonus_content">
          <p className="carac_bonus">{bonus}</p>
        </div>
      </div>
      {/* // bottom // */}
      <div className="bonus_save_content">
        <p className="bonus_save">save</p>
        <p className="bonus_save_num">{save}</p>
      </div>
      {/* // flagBtn // */}
      <img className="Comp_Btn" src={medievalBtn} alt="-" />
    </div>
  );
}

export default CaracSeg;
