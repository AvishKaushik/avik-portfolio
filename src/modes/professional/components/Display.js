import React from "react";
import GWU from "../../../../public/GW-light.png";
import GWUDark from "../../../../public/GW-Dark.png";
import VIT from "../../../../public/vit.png";
import VITDark from "../../../../public/vit-dark.png";
import SCHOOL from "../../../../public/school.png";
import SG from "../../../../public/sg-light.png";
import SGDark from "../../../../public/sg-dark.png";
import Awards from "./Awards";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import python from "../../../../public/projects/dark/tech/python.png";
import postgre from "../../../../public/projects/dark/tech/postgre.png";
import angular from "../../../../public/projects/dark/tech/angular.png";
import react from "../../../../public/projects/dark/tech/react.png";
// import dqman from "../../../../public/projects/dark/Dqman.webp";
import java from "../../../../public/projects/dark/tech/java.png";
import rabbitmq from "../../../../public/projects/dark/tech/rabbitmq.png";
import kubernetes from "../../../../public/projects/dark/tech/kubernetes.png";
import xldeploy from "../../../../public/projects/dark/tech/XL-Deploy.png";
import jenkins from "../../../../public/projects/dark/tech/jenkins.png";
import sonarqube from "../../../../public/projects/dark/tech/sonarqube.png";
import azure from "../../../../public/projects/dark/tech/azure.png";
import aggrid from "../../../../public/projects/dark/tech/aggrid.png";
import mongo from "../../../../public/projects/dark/tech/mongo.png";
import node from "../../../../public/projects/dark/tech/node.png";
import express from "../../../../public/projects/dark/tech/express.png";

const Display = ({ data, selectedTheme }) => {
  var vars = { "GWU-light": GWU,"GWU-dark": GWUDark, "VIT-light": VIT, "VIT-dark": VITDark, "SCHOOL-light": SCHOOL, "SCHOOL-dark": SCHOOL, "SG-light": SG, "SG-dark": SGDark };

  var vars2 = {
    Python: python,
    PostgreSQL: postgre,
    JAVA: java,
    RabbitMQ: rabbitmq,
    Kubernetes: kubernetes,
    "XL Deploy": xldeploy,
    Jenkins: jenkins,
    Azure: azure,
    AGGrid: aggrid,
    MongoDB: mongo,
    Node: node,
    Express: express,
    Angular: angular,
    React: react,
    SonarQube: sonarqube,
    DQL: react,
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {Array.from(data).map((subData) => {
        if (subData.type === "text") {
          return (
            <div
              key={subData.subHeading}
              className={"text-" + selectedTheme}
              style={{ margin: "1% 2% 4%" }}
            >
              <div
                style={{
                  // marginTop: "4%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "1%",
                }}
              >
                ABOUT
              </div>
              <div style={{ textAlign: "center" }}>{subData.data}</div>
              <div
                style={{
                  marginTop: "4%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                SKILL SET
              </div>
              <div className="icon-set">
                {Array.from(subData.technologies).map((tech) => {
                  return (
                    <div style={{ height: "50px", margin: "20px", textAlign: "center" }}>
                      <img
                        alt={tech}
                        src={vars2[tech]}
                        style={{ height: "40px" }}
                      />

                      <div className={"text-" + selectedTheme}>{tech}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
        if (subData.type === "education") {
          return (
            <div className="list">
              {Array.from(subData.data).map((value, key) => {
                return (
                  <Education
                    value={value}
                    key={key}
                    vars={vars}
                    selectedTheme={selectedTheme}
                  />
                );
              })}
            </div>
          );
        }
        if (subData.type === "experience") {
          return (
            <div className="list">
              {Array.from(subData.data).map((value, key) => {
                return (
                  <Experience
                    value={value}
                    key={key}
                    vars={vars}
                    selectedTheme={selectedTheme}
                  />
                );
              })}
            </div>
          );
        }
        if (subData.type === "showcase") {
          return (
            <div className={"showcase-" + selectedTheme}>
              {Array.from(subData.data).map((awards) => {
                return <Awards awards={awards} selectedTheme={selectedTheme} />;
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
