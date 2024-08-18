import React, { useEffect } from "react";
import Phaser from "phaser";
import GameComponent from "./GameComponent";
import sky from "./assets/sky.png";
import logo from "./assets/bomb.png";
import star from "./assets/star.png";
import platform from "./assets/platform.png";

let keyA;
let keyW;
let keyD;
let keySpace;
let player;
let count = 0;
let platforms;
let text;
let pos = 0;
let bg;
let details = ["Welcome to my world\nMy name is Avish","This is my portfolio"];
let location = 0;

class Game extends Phaser.Scene {
  preload() {
    this.load.image("sky", sky);
    this.load.image("logo", logo);
    this.load.image("star", star);
    this.load.image("platform", platform);
  }

  create() {
    bg = this.add.image(400, 100, "sky");
    this.add.image(2780, 100, "star");
    bg.setDisplaySize(8000, 1400);
    player = this.physics.add.sprite(400, 100, "logo");
    keyA = this.input.keyboard.addKey("A");
    keyW = this.input.keyboard.addKey("W");
    keyD = this.input.keyboard.addKey("D");
    keySpace = this.input.keyboard.addKey("space");
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 200, "platform");
    platforms.create(500, 300, "platform");
    this.physics.add.collider(player, platforms);
    text = this.add.text(400, 200, "");
    text.setFontFamily('"Edu AU VIC WA NT Hand", sans-serif')
    text.setFontSize("48px");
    player.setCollideWorldBounds(true);
    this.cameras.main.setBounds(0, 0, 4800, 200);
    this.cameras.main.startFollow(player);
    this.cameras.main.setFollowOffset(-300, 225);
    this.cameras.main.setLerp(1, 0);
    // text.startFollow(player)
  }

  update() {
    if(player.body.position.x<1500 && location!==0) {
      location=0;
      pos=0;
    } else if(player.body.position.x>=1500 && location!==1){
      location=1;
      pos=0;
    }
    text.x = 400 + this.cameras.main.scrollX;
    if (keyA.isDown) {
      player.setVelocityX(-700);
    } else if (keyD.isDown) {
      player.setVelocityX(700);
    } else {
      player.setVelocityX(0);
    }
    if ((keyW.isDown || keySpace.isDown) && player.body.blocked.down) {
      player.setVelocityY(-1200);
    }
    count++;
    if (count % 10 === 0) {
      pos++;
    }
    text.x = player.body.position.x - 1000;
    text.text = details[location].substring(0, pos);
    if (player.body.position.x < 1080) {
      text.visible = false;
      pos = 0;
    } else {
      text.visible = true;
    }
  }
}

const Scene = () => {
  const config = {
    type: Phaser.AUTO,
    parent: "phaser-container",
    width: 2800,
    height: 800,
    scene: Game,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 2880 },
      },
    },
  };

  return (
    <div>
      <GameComponent config={config} />
    </div>
  );
};

export default Scene;
