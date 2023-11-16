import "./homepage.css";
import Dragonred from "../../assets/dnd_ico/dragon_red.png";
import DnD from "../../assets/dnd_ico/D&D.png";
// import scrollpaper from "../../assets/dnd_ico/scroll_papyrus.png";
import Navbar from "../Navbar/Navbar";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />

      <div className="character_sheet">
        <img className="dragon_icone" src={Dragonred} alt="dragonimage" />
        <div className="text-with-lines">
          <p className="title">DRAGON PAPER</p>
        </div>

        <div className="scrollpaper_items">
          <h1>CREATE YOUR</h1>
          <h1>CHACTER SHEET</h1>
          <img className="dnd_title" src={DnD} alt="DnD" />
        </div>

        <p className="paragraph">
          Dungeons & Dragons is a role-playing game where players create
          characters with unique abilities and embark on adventures in a fantasy
          world with their imaginations to navigate challenges, solve puzzles,
          engage in combat, and interact with the game's rich narrative.
        </p>
      </div>
    </div>
  );
}
export default HomePage;
