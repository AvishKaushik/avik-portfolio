import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import brainiac from "../../../../public/projects/dark/awards/brainiac.png";
import leetcode from "../../../../public/projects/dark/awards/knight.png";
import hashcode from "../../../../public/projects/dark/awards/hashcode.png";
import spot from "../../../../public/projects/dark/awards/spot.png";
import sudoku from "../../../../public/projects/dark/awards/sudoku.png";
import blspecial from "../../../../public/projects/dark/awards/blspecial.png";
import reply from "../../../../public/projects/dark/awards/reply.png";
import decipher from "../../../../public/projects/dark/awards/decipher.png";

const Awards = ({ awards, selectedTheme }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  var vars = {
    brainiac: brainiac,
    blspecial: blspecial,
    spot: spot,
    reply: reply,
    hashcode: hashcode,
    decipher: decipher,
    sudoku: sudoku,
    leetcode: leetcode,
  };

  return (
    <div className={"award-" + selectedTheme}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="front" onClick={onFlip}>
          <div
            style={{
              height: "120px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              alt={awards.name}
              src={vars[awards.id]}
              style={{ height: awards.size, margin: "auto" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>{awards.name}</div>
          <div style={{ textAlign: "center" }}>{awards.organization}</div>
        </div>
        <div className="back" onClick={onFlip}>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>{awards.flipname}</div>
          <div class="separator"></div>
          <div style={{ textAlign: "center" }}>{awards.description}</div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Awards;
