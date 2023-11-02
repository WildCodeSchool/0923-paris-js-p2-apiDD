import "./caracBloc.css";
import CaracSeg from "../CaracSeg/CaracSeg";
import SkillsBloc from "../SkillsBloc/SkillsBloc";

function CaracBloc() {
  const caracs = [
    {
      caracName: "STR",
      caracValue: "10",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "DEX",
      caracValue: "11",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CONST",
      caracValue: "15",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "WIS",
      caracValue: "12",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "INT",
      caracValue: "13",
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CHAR",
      caracValue: "14",
      caracBonus: "+0",
      caracSave: "+0",
    },
  ];

  const SkillsBlocs = [
    {
      skillBlocTitle: "STRENGTH BASED SKILLS",
      skillId: "strength",
      skills1: {
        name: "Athletics",
        value: "+x",
      },
      display: "none",
    },
    {
      skillBlocTitle: "DEXTERITY BASED SKILLS",
      skillId: "dexterity",
      skills1: {
        name: "Acrobatics",
        value: "+x",
      },
      skills2: {
        name: "Sleight of Hand",
        value: "+x",
      },
      skills3: {
        name: "Stealth ",
        value: "+x",
      },
    },
    {
      skillBlocTitle: "INTELLIGENCE BASED SKILLS",
      skillId: "intelligence",
      skills1: {
        name: "Arcane",
        value: "+x",
      },
      skills2: {
        name: "History",
        value: "+x",
      },
      skills3: {
        name: "Investigation",
        value: "+x",
      },
      skills4: {
        name: "Nature",
        value: "+x",
      },
      skills5: {
        name: "Religion",
        value: "+x",
      },
    },
    {
      skillBlocTitle: "WISDOM BASED SKILLS",
      skillId: "wisdom",
      skills1: {
        name: "Animal Handling",
        value: "+x",
      },
      skills2: {
        name: "Insight",
        value: "+x",
      },
      skills3: {
        name: "Medicine",
        value: "+x",
      },
      skills4: {
        name: "Perception",
        value: "+x",
      },
      skills5: {
        name: "Survival",
        value: "+x",
      },
    },
    {
      skillBlocTitle: "CHARISMA BASED SKILLS",
      skillId: "charisma",
      skills1: {
        name: "Deception",
        value: "+x",
      },
      skills2: {
        name: "Intimidation",
        value: "+x",
      },
      skills3: {
        name: "Persuasion",
        value: "+x",
      },
      skills4: {
        name: "Performance",
        value: "+x",
      },
    },
  ];

  return (
    <section id="caracs_skills_section">
      <div className="carac_Bloc">
        {caracs.map((carac) => (
          <CaracSeg
            key={carac.caracName}
            name={carac.caracName}
            value={carac.caracValue}
            bonus={carac.caracBonus}
            save={carac.caracSave}
          />
        ))}
      </div>
      <div>
        {SkillsBlocs.map((skill) => (
          <SkillsBloc
            key={skill.skillBlocTitle}
            skillTitle={skill.skillBlocTitle}
            skillsId={skill.skillId}
            skill1={skill.skills1}
            skill2={skill.skills2}
            skill3={skill.skills3}
            skill4={skill.skills4}
            skill5={skill.skills5}
          />
        ))}
      </div>
    </section>
  );
}

export default CaracBloc;
