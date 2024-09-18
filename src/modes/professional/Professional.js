import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { amber } from "@mui/material/colors";
import content from "../../data/content.json";
import Display from "./components/Display";
import Info from "./components/Info";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
  flexContainer: {
    justifyContent: "safe center",
    alignItems: "center",
  },
});

const Professional = ({ Trophy }) => {
  const classes = useTabStyles();
  const [value, setValue] = React.useState("achievements");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <Grid container spacing={4} sx={{marginTop: '6%', height: "84vh", flexGrow: "1", justifyContent: "center"}}>
        <Grid item xs={11.5} md={3}>
          <Info />
        </Grid>
        <Grid item xs={11.5} md={8.5} >
          <div id="content">
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  color: amber[50],
                }}
              >
                <TabList
                  classes={{
                    root: classes.root,
                    scroller: classes.scroller,
                    flexContainer: classes.flexContainer,
                  }}
                  onChange={handleChange}
                  textColor="inherit"
                  variant="scrollable"
                  scrollButtons="auto"
                  TabIndicatorProps={{ sx: { backgroundColor: amber[50] } }}
                >
                  {Object.keys(content).map((key) => {
                    return (
                      <Tab key={key} label={content[key].label} value={key} />
                    );
                  })}
                </TabList>
              </Box>
              {Object.keys(content).map((key) => {
                return (
                  <TabPanel
                    key={key}
                    value={key}
                    sx={{ padding: 0, height: "74vh" }}
                  >
                    <Display data={content[key].data} Trophy={Trophy}></Display>
                  </TabPanel>
                );
              })}
            </TabContext>
          </div>
        </Grid>
      </Grid>
  );
};

export default Professional;
