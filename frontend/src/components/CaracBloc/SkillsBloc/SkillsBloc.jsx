import React from "react";
import "./skillsbloc.css";
import "./skillsbloc_position.css";

function SkillsBloc(props) {
  const { skillTitle, skillsId, skill1, skill2, skill3, skill4, skill5 } =
    props;
  // toto

  return (
    <div className="skill_bloc" id={skillsId}>
      <div className="skill_bloc_bkg">
        {/* TOP */}

        {/* CONTENT */}
        <div className="skills_content">
          {/* CARAC SKILLS TITLE */}
          <h1 className="skill_bloc_title">{skillTitle}</h1>
          {/* SKILL LINE */}
          <div className="skill_lines">
            <div className="skill_line">
              <label className="checkbox_label" htmlFor={skill1.name}>
                <input id={skill1.name} type="checkbox" />
                <span className="custom_checkbox" />
              </label>
              <div className="value_imput">
                <p className="skill_value">{skill1.value}</p>
              </div>
              <p className="skill_name">{skill1.name}</p>
            </div>
            {skill2 && (
              <div className="skill_line">
                <label className="checkbox_label" htmlFor={skill2.name}>
                  <input id={skill2.name} type="checkbox" />
                  <span className="custom_checkbox" />
                </label>
                <div className="value_imput">
                  <p className="skill_value">{skill2.value}</p>
                </div>
                <p className="skill_name">{skill2.name}</p>
              </div>
            )}
            {skill3 && (
              <div className="skill_line">
                <label className="checkbox_label" htmlFor={skill3.name}>
                  <input id={skill3.name} type="checkbox" />
                  <span className="custom_checkbox" />
                </label>
                <div className="value_imput">
                  <p className="skill_value">{skill3.value}</p>
                </div>
                <p className="skill_name">{skill3.name}</p>
              </div>
            )}
            {skill4 && (
              <div className="skill_line">
                <label className="checkbox_label" htmlFor={skill4.name}>
                  <input id={skill4.name} type="checkbox" />
                  <span className="custom_checkbox" />
                </label>
                <div className="value_imput">
                  <p className="skill_value">{skill4.value}</p>
                </div>
                <p className="skill_name">{skill4.name}</p>
              </div>
            )}
            {skill5 && (
              <div className="skill_line">
                <label className="checkbox_label" htmlFor={skill5.name}>
                  <input id={skill5.name} type="checkbox" />
                  <span className="custom_checkbox" />
                </label>
                <div className="value_imput">
                  <p className="skill_value">{skill5.value}</p>
                </div>
                <p className="skill_name">{skill5.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBloc;
