import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Arcade from "./modes/arcade/Arcade";
import Professional from "./modes/professional/Professional";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TerminalIcon from "@mui/icons-material/Terminal";
import SourceIcon from "@mui/icons-material/Source";
import Unix from "./modes/unix/Unix";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box position={"absolute"} top={"30px"} left={"30px"} sx={{borderRadius: 10}}>
          <AppBar
            position="relative"
            border={"10px"}
            style={{ width: 1430, backgroundColor: 'rgb(30, 30, 33)', borderRadius: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.9)'}}
          >
            <Toolbar sx={{border: "inherit"}}>
              <span className="logo-name" style={{ marginRight: 520 }}>
                AvishKaushik
              </span>
              <Link to="/professional" style={{color: "#fff"}}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <SourceIcon />
                </IconButton>
              </Link>
              <Link to="/arcade" style={{color: "#fff"}}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <VideogameAssetIcon />
                </IconButton>
              </Link>
              <Link to="/unix" style={{color: "#fff"}}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <TerminalIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/unix" element={<Unix />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="*" element={<Navigate to="/professional" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
