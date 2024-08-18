import React from "react";

const Display = ({ data }) => {
  return (
    <div>
      {Array.from(data).map((subData) => {
        if (subData.type === "text") {
          return <div key={subData.subHeading}>{subData.data}</div>;
        }
        if (subData.type === "showcase") {
          return (
            <div>
              {Array.from(subData.data).map((awards) => {
                return (
                  <div>
                    <div>{awards.name}</div>
                    <div>{awards.organization}</div>
                  </div>
                );
              })}
            </div>
          );
        }
        return (
          <div>
            NOTHING TO SHOW!! Please fill in the information in content.json
            properly
          </div>
        );
      })}
    </div>
  );
};

export default Display;
