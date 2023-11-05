import "../../assets/variables.css";
import "./caracSeg.css";
import FlagBtn from "./FlagBtn";
import ArrowLine2 from "../../assets/dnd_ico/ArrowLine_2.png";

function CaracSeg(props) {
  const { name, value, bonus, save, id } = props;
  const isFlagBtnHidden = id === "CONST";
  const showArrowLine = id !== "CHAR";

  return (
    <>
      <div className="carac_segment" id={id}>
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
        {!isFlagBtnHidden && <FlagBtn />}
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
