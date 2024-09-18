import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Arcade from "./modes/arcade/Arcade";
import Professional from "./modes/professional/Professional";
// import NewProfessional from "./modes/professional/NewProfessional.js";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TerminalIcon from "@mui/icons-material/Terminal";
import SourceIcon from "@mui/icons-material/Source";
import Unix from "./modes/unix/Unix";
import { Link } from "react-router-dom";
import Trophy from "../public/Trophy.jsx";
import zIndex from "@mui/material/styles/zIndex.js";

const App = () => {
  return (
    <div style={{width: '100%'}}>
      <BrowserRouter>
        <Box
          position={"fixed"}
          sx={{ width: "100%", zIndex: 1, top: 0 }}
          xs={12}
        >
          <AppBar
            position="relative"
            border={"10px"}
            style={{
              width: "auto",
              backgroundColor: "rgb(30, 30, 33)",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.9)",
              minHeight: "10%",
              maxHeight: "10%",
              margin: "2%",
              // marginBottom: "1%",
              // display: 'none'
            }}
          >
            <Toolbar sx={{ border: "inherit" }}>
              <span className="logo-name" style={{ marginRight: 520 }}>
                AvishKaushik
              </span>
              {/* <div>
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
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/arcade" element={<Professional />} />
          <Route path="/unix" element={<Professional />} />
          <Route
            path="/professional"
            element={<Professional Trophy={Trophy} />}
          />
          <Route path="*" element={<Navigate to="/professional" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
