import "../../../assets/variables.css";
import "./caracSeg.css";
import medievalBtn from "../../../assets/dnd_ico/medieval.png";

function FlagBtn(props) {
  const { id } = props;

  // function textClick() {
  //   console.log("ok ça clique");
  // }

  return (
    <>
      <img
        className="Comp_Btn"
        id={id}
        src={medievalBtn}
        alt="Cliquez pour afficher/masquer les compétences"
        // onClick={textClick}
      />
      <div> </div>
    </>
  );
}

export default FlagBtn;
