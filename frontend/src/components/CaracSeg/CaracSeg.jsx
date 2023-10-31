import React from "react";
import "../../assets/variables.css";
import "./caracSeg.css";

function CaracSeg() {
  return (
    <div className="carac_segment">
      {/* // top // */}
      <div className="carac_num_container">
        <p className="carac_num">00</p>
      </div>
      {/* // main // */}
      <div className="carac_main_content">
        <p className="carac_title">TXT</p>
        <div className="carac_bonus_content">
          <p className="carac_bonus">+X</p>
        </div>
      </div>
      {/* // bottom // */}
      <div className="bonus_save_content">
        <p className="bonus_save">save</p>
        <p className="bonus_save_num">+X</p>
      </div>
    </div>
  );
}

export default CaracSeg;
