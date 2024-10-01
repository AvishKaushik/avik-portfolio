import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Professional from "./modes/professional/Professional";
import Splash from "./modes/Splash.js";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const onChangeTheme = (newValue) => {
    document.body.className=('body-'+newValue);
    setSelectedTheme(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          {/* <Route path="/arcade" element={<Arcade />} /> */}
          {/* <Route path="/unix" element={<Unix onChangeTheme={onChangeTheme} theme={theme}/>} /> */}
          <Route
            path="/professional"
            element={
              <Professional
                onChangeTheme={onChangeTheme}
                selectedTheme={selectedTheme}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
