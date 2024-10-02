import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Avatar, Box, Tab } from "@mui/material";
import React from "react";
import { amber } from "@mui/material/colors";
import art from "../../../../public/projects/dark/art.png";
import billing from "../../../../public/projects/dark/billing.png";
import dcmt from "../../../../public/projects/dark/dcmt.png";
import demat from "../../../../public/projects/dark/demat.png";
import eduhub from "../../../../public/projects/dark/eduhub.png";
import fact from "../../../../public/projects/dark/fact.png";
// import jedeai from "../../../../public/projects/dark/jedeai.png";
import toolkit from "../../../../public/projects/dark/toolkit.png";
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
import { makeStyles } from "@mui/styles";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  scroller: {
    flexGrow: "0",
  },
  flexContainer: {
    justifyContent: "safe center",
    alignItems: "center",
  },
});

const Projects = ({ projects, selectedTheme }) => {
  const classes = useTabStyles();
  const [value, setValue] = React.useState("EDMS");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var vars = {
    "Art Quest": art,
    Billing: billing,
    DCMT: dcmt,
    DEMAT: demat,
    EduHUB: eduhub,
    FACT: fact,
    EDMS: demat,
    "Teacher's Toolkit": toolkit,
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
    <div id="project">
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className={"secondary-tab-" + selectedTheme}
        >
          <TabList
            onChange={handleChange}
            textColor="inherit"
            variant="scrollable"
            classes={{
              root: classes.root,
              scroller: classes.scroller,
              flexContainer: classes.flexContainer,
            }}
            TabIndicatorProps={
              selectedTheme === "dark"
                ? { sx: { backgroundColor: amber[50] } }
                : { sx: { backgroundColor: "#000" } }
            }
            centered
          >
            {Array.from(projects).map((project) => {
              return (
                <Tab
                  key={project.name}
                  label={project.name}
                  value={project.name}
                  icon={
                    <Avatar
                      alt={project.name}
                      src={vars[project.name]}
                      style={
                        selectedTheme === "dark" ? {} : { filter: "invert(1)" }
                      }
                    />
                  }
                />
              );
            })}
          </TabList>
        </Box>
        {Array.from(projects).map((project) => {
          return (
            <TabPanel
              key={project.name}
              value={project.name}
              style={{
                height: "100%",
                position: "relative",
                overflow: "auto",
              }}
              className={"text-" + selectedTheme}
            >
              {/* <div style={{ height: "67%", overflow: "auto" }}> */}
                {project.description}
                {Array.from(project.points).map((point) => {
                  return <div className={"text-" + selectedTheme}>{point}</div>;
                })}
              {/* </div> */}
              <div
                style={{
                  //   width: "-webkit-fill-available",
                  //   position: "absolute",
                  bottom: 22,
                  overflow: "auto"
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "2%",
                  }}
                  className={"text-" + selectedTheme}
                >
                  <h4>TECHNOLOGIES USED</h4>
                </div>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "auto",
                    bottom: 0,
                    listStyleType: "none",
                    flexWrap: "wrap",
                    padding: "0",
                  }}
                >
                  {Array.from(project.technologies).map((tech) => {
                    return (
                      <li
                        className="techno"
                        style={{
                          width: 120,
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <img
                          alt={tech}
                          src={vars[tech]}
                          style={{ height: "40px" }}
                        />
                        <div className={"text-" + selectedTheme}>{tech}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
};

export default Projects;
