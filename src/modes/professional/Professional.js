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
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
// import TerminalIcon from "@mui/icons-material/Terminal";
// import SourceIcon from "@mui/icons-material/Source";
// import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
  flexContainer: {
    justifyContent: "safe center",
  },
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb": {
        backgroundColor: "#fff",
        width: 32,
        height: 32,
      },
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#000"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#000",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const Professional = (props) => {
  const classes = useTabStyles();
  const [theme, setTheme] = React.useState(
    props.selectedTheme === "light" ? false : true
  );
  const [value, setValue] = React.useState("about");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleThemeChange = (event) => {
    if (event.target.checked) {
      props.onChangeTheme("dark");
    } else {
      props.onChangeTheme("light");
    }
    setTheme(event.target.checked);
  };
  return (
    <Grid
      container
      spacing={4}
      sx={{
        height: "84vh",
        flexGrow: "1",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} md={12}>
        <Box
          position={"relative"}
          sx={{ width: "100%", zIndex: 1, top: 0 }}
          xs={12}
        >
          <AppBar
            className={"navbar-" + props.selectedTheme}
            position="relative"
            border={"10px"}
            style={{
              width: "auto",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.9)",
              minHeight: "10%",
              maxHeight: "10%",
              margin: "2%",
              marginBottom: "0%",
            }}
          >
            <Toolbar sx={{ border: "inherit" }}>
              <Grid
                container
                spacing={4}
                sx={{
                  height: "100%",
                  flexGrow: "1",
                  paddingTop: "8px",
                }}
              >
                <Grid item xs={11} md={11}>
                  <span className={"logo-name-" + props.selectedTheme}>
                    AvishKaushik
                  </span>
                </Grid>
                {/* <div style={{ marginRight: 520 }}>
                <Link to="/professional" style={{ color: "#fff" }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <SourceIcon />
                  </IconButton>
                </Link>
                <Link to="/arcade" style={{ color: "#fff" }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <VideogameAssetIcon />
                  </IconButton>
                </Link>
                <Link to="/unix" style={{ color: "#fff" }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <TerminalIcon />
                  </IconButton>
                </Link>
              </div> */}

                <Grid item xs={1} md={1}
                    style={{marginTop: "4px", paddingLeft: "0px"}}>
                  <MaterialUISwitch
                    checked={theme}
                    onChange={handleThemeChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid item xs={11.5} md={3}>
        <Info selectedTheme={props.selectedTheme} />
      </Grid>
      <Grid item xs={11.5} md={8.5}>
        <div id="content" className={"content-" + props.selectedTheme}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
              className={"primary-tab-" + props.selectedTheme}
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
                TabIndicatorProps={
                  props.selectedTheme === "dark"
                    ? { sx: { backgroundColor: amber[50] } }
                    : { sx: { backgroundColor: "#000" } }
                }
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
                  <Display
                    data={content[key].data}
                    selectedTheme={props.selectedTheme}
                  ></Display>
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
