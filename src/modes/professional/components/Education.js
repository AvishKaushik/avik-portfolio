import React from "react";

const Education = ({ value, vars, selectedTheme }) => {
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
            color: "#fff8e1",
            marginLeft: "10px",
            width: "100%",
          }}
          
        >
          <div className={"text-"+selectedTheme}>{value.name}</div>
          <div className={"text-"+selectedTheme}>{value.board}</div>
          <div className={"text-"+selectedTheme}>{value.grade}</div>
          <div className={"text-"+selectedTheme}>{value.date}</div>
        </div>
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <img
            loading="lazy"
            alt={value.name}
            src={vars[value.imgLocation+"-"+selectedTheme]}
            style={{
              width: 86,
              // height: 76,
              margin: "auto",
              float: "right",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
