import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../modes/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.text }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}
const darkTheme = {
    body: "#FFF0EA",
    text: "#28282B",
    highlight: "#FFFFFF",
    dark: "#00072D",
    secondaryText: "#7F8DAA",
    imageHighlight: "#0E6BA8",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#0A2472",
    headerColor: "#0E6BA877",
  };


const Splash = () =>  {
    const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 5500);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(id);
  }, []);
    return redirect ? (
      <Navigate to="/professional" />
    ) : (
      <AnimatedSplash theme={darkTheme} />
    );
}

export default Splash;
