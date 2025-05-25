import React from "react";
import "./Skills.css";
import SkillSection2 from "./SkillSection2";
import { Fade } from "react-reveal";

export default function Skills2(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do ?
          </h1>
        </Fade>
      </div>
      <SkillSection2 theme={theme} />
    </div>
  );
}
