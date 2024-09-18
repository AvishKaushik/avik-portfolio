import React from "react";
import { Avatar } from "@mui/material";
import profile from "../../../assets/Profile.jpeg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import leetcode from "../../../../public/projects/dark/links/leetcode.png";
import discord from "../../../../public/projects/dark/links/discord.png";
import codeforces from "../../../../public/projects/dark/links/codeforces.png";
import github from "../../../../public/projects/dark/links/github.png";
import linkedin from "../../../../public/projects/dark/links/linkedin.png";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

const Info = () => {
  return (
    <div id="info">
      <Avatar
        alt="Avish Kaushik"
        src={profile}
        sx={{
          position: "relative",
          width: 96,
          height: 96,
          margin: "auto",
          marginTop: "8%",
        }}
      />
      <div>
        <div className="name" style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}>
          Avish Kaushik
        </div>
        <div className="title" style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}>
          Software Developer
        </div>
        <div class="separator"></div>
        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <LocationOnOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Washington, DC, USA</address>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <SchoolOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Student</p>

              <address>George Washington University</address>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <WorkHistoryOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Ex-Software Engineer</p>

              <address>Societe Generale Global Solution Center</address>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <LocalPhoneOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <address>+1-571-982-9826</address>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <EmailOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Mail</p>

              <address>avish.kaushik20@gmail.com</address>
            </div>
          </li>
        </ul>
        <div class="separator"></div>
        <div
          style={{ margin: "auto", justifyContent: "center", display: "flex" }}
        >
          <img alt="Leetcode" src={leetcode} style={{ marginRight: 10 }}></img>
          <img alt="Discord" src={discord} style={{ marginRight: 10 }}></img>
          <img
            alt="CodeForces"
            src={codeforces}
            style={{ marginRight: 10 }}
          ></img>
          <img alt="Github" src={github} style={{ marginRight: 10 }}></img>
          <img alt="LinkedIn" src={linkedin} style={{ marginRight: 10 }}></img>
        </div>
      </div>
    </div>
  );
};

export default Info;
