import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline"
                    name={logo.skillName}
                    style={logo.style}
                  >
                    {/* If iconSrc is provided, use <img>. Else use iconify span */}
                    {logo.iconSrc ? (
                      <img
                        src={logo.iconSrc}
                        alt={logo.skillName}
                        style={{
                          width: logo.iconSize?.width || "40px",
                          height: logo.iconSize?.height || "40px",
                          objectFit: "contain",
                          verticalAlign: "middle",
                        }}
                      />
                    ) : (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
