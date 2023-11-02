import "../../assets/variables.css";
import "./caracSeg.css";
import medievalBtn from "../../assets/dnd_ico/medieval.png";

function FlagBtn() {
  //   function textClick() {
  //     console.log("ok");
  //   }

  return (
    <>
      <img
        className="Comp_Btn"
        src={medievalBtn}
        alt="Cliquez pour afficher/masquer les compétences"
        // onClick={textClick}
      />
      <div> </div>
    </>
  );
}

export default FlagBtn;
