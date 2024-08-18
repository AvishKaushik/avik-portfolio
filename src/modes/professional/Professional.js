import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { amber } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import profile from "../../assets/Profile.jpeg";
import content from "../../data/content.json";
import Display from "./components/Display";

const Professional = () => {
  const [value, setValue] = React.useState("about");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      id="resume"
      style={{ backgroundColor: "rgb(40, 40, 43)", minHeight: "100vh" }}
    >
      <div id="info">
        <Avatar
          alt="Avish Kaushik"
          src={profile}
          sx={{
            position: "relative",
            width: 96,
            height: 96,
            margin: "auto",
            marginTop: "60px",
          }}
        />
        <div>
          <div style={{ margin: "auto", textAlign: "center" }}>
            Avish Kaushik
          </div>
        </div>
      </div>
      <div id="content">
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", color: amber[50] }}
          >
            <TabList
              onChange={handleChange}
              textColor="inherit"
              TabIndicatorProps={{ sx: { backgroundColor: amber[50] } }}
              centered
            >
              {Object.keys(content).map((key) => {
                return (
                  <Tab key={key} label={content[key].label} value={key}/>
                );
              })}
            </TabList>
          </Box>
          {Object.keys(content).map((key) => {
            return (
              <TabPanel key={key} value={key}>
                <Display data={content[key].data}></Display>
              </TabPanel>
            );
          })}
        </TabContext>
      </div>
    </div>
  );
};

export default Professional;
