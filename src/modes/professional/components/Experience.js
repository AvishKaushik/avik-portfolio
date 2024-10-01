import React from "react";

const Experience = ({ value, vars, selectedTheme }) => {
  return (
    <div className="sublist">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={value.isCurrent === true ? "pointer" : "oldPointer"}></div>
        <div className={!value.isLast ? "line" : "invisible"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            color: "#fff",
            marginLeft: "10px",
            width: "100%",
          }}
        >
          <div className={"text-"+selectedTheme}>{value.name}</div>
          <div className={"text-"+selectedTheme}>{value.designation}</div>
          <div className={"text-"+selectedTheme}>{value.from}-{value.to}</div>
        </div>
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <img
            loading="lazy"
            alt="univeristy"
            src={vars[value.imgLocation]}
            style={{
              width: 76,
              height: 76,
              margin: "auto",
              float: "right",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
