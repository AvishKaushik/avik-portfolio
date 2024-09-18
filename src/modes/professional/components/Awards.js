import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import ReactCardFlip from "react-card-flip";
import brainiac from "../../../../public/projects/dark/awards/brainiac.png";
import leetcode from "../../../../public/projects/dark/awards/knight.png";
import hashcode from "../../../../public/projects/dark/awards/hashcode.png";
import spot from "../../../../public/projects/dark/awards/spot.png";
import sudoku from "../../../../public/projects/dark/awards/sudoku.png";
import blspecial from "../../../../public/projects/dark/awards/blspecial.png";
import reply from "../../../../public/projects/dark/awards/reply.png";
import decipher from "../../../../public/projects/dark/awards/decipher.png";

const Awards = ({ awards, Trophy }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  var vars = {
    "brainiac": brainiac,
    "blspecial": blspecial,
    "spot": spot,
    "reply": reply,
    "hashcode": hashcode,
    "decipher": decipher,
    "sudoku": sudoku,
    "leetcode": leetcode,
  };

  return (
    <div className="award">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="front" onClick={onFlip}>
          {/* <Canvas style={{ height: "120px" }} camera={{ position: [0, 80, 50], isPerspectiveCamera: true }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} enableRotate={false} />
              <Trophy />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas> */}
          <div
            style={{
              height: "120px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img src={vars[awards.id]} style={{ height: awards.size, margin: "auto" }} />
          </div>
          <div style={{ textAlign: "center" }}>{awards.name}</div>
          <div style={{ textAlign: "center" }}>{awards.organization}</div>
        </div>
        <div className="back" onClick={onFlip}>
          OHH YESS
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Awards;
