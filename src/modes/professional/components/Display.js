import React from "react";
import GWU from "../../../../public/GW_Logo_Dark.png";
import VIT from "../../../../public/vit-dark.png";
import SCHOOL from "../../../../public/school-dark.png";
import Awards from "./Awards";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";

const Display = ({ data, selectedTheme }) => {
  var vars = { GWU: GWU, VIT: VIT, SCHOOL: SCHOOL };

  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      {Array.from(data).map((subData) => {
        if (subData.type === "text") {
          return (
            <div key={subData.subHeading} className={"text-"+selectedTheme}>
              {subData.data}
              <div>SKILL SET</div>
              <div>SKILL SET</div>
            </div>
          );
        }
        if (subData.type === "education") {
          return (
            <div className="list">
              {Array.from(subData.data).map((value, key) => {
                return <Education value={value} key={key} vars={vars} selectedTheme={selectedTheme} />;
              })}
            </div>
          );
        }
        if (subData.type === "experience") {
          return (
            <div className="list">
              {Array.from(subData.data).map((value, key) => {
                return <Experience value={value} key={key} vars={vars} selectedTheme={selectedTheme} />;
              })}
            </div>
          );
        }
        if (subData.type === "showcase") {
          return (
            <div className={"showcase-"+selectedTheme}>
              {Array.from(subData.data).map((awards) => {
                return <Awards awards={awards} selectedTheme={selectedTheme}/>;
              })}
            </div>
          );
        }
        if (subData.type === "project") {
          return (
            <div className="aaa">
              <Projects projects={subData.data} selectedTheme={selectedTheme} />
            </div>
          );
        }
        return (
          <div className="text">
            NOTHING TO SHOW!! Please fill in the information in content.json
            properly
          </div>
        );
      })}
    </div>
  );
};

export default Display;
