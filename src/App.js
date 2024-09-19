import React, {useState} from "react";
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
import zIndex from "@mui/material/styles/zIndex.js";
import Splash from "./modes/Splash.js";

const App = () => {
  const [theme, setTheme] = useState("light");

  const onChangeTheme = (newValue) => {
    setTheme(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          {/* <Route path="/arcade" element={<Arcade />} /> */}
          <Route path="/unix" element={<Unix onChangeTheme={onChangeTheme} theme={theme}/>} />
          <Route path="/professional" element={<Professional onChangeTheme={onChangeTheme} theme={theme} />} />
          <Route path="*" element={<Navigate to="/professional" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
