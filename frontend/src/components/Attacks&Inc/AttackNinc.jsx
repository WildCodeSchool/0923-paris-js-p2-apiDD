import Armor from "./Armors/Armor";
import Weapon from "./Weapons/Weapon";
import "./attackninc.css";

function AttackNinc() {
  return (
    <div className="attackNinc">
      <h1 className="heading"> Attacks & Incantations</h1>
      <div className="weapon_armor">
        <Weapon />
        <Armor />
      </div>
    </div>
  );
}
export default AttackNinc;
