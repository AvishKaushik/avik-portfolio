import React from "react";
import { Avatar } from "@mui/material";
import profile from "../../../assets/Profile.jpeg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import leetcode from "../../../../public/projects/dark/links/leetcode.svg";
import discord from "../../../../public/projects/dark/links/discord.svg";
import codeforces from "../../../../public/projects/dark/links/codeforces.svg";
import hackerrank from "../../../../public/projects/dark/links/hackerrank.svg";
import codechef from "../../../../public/projects/dark/links/codechef.svg";
import github from "../../../../public/projects/dark/links/github.svg";
import linkedin from "../../../../public/projects/dark/links/linkedin.svg";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

const Info = (props) => {
  return (
    <div id="info" className={"info-"+props.selectedTheme}>
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
        <div
          className={"name-"+props.selectedTheme}
          style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}
        >
          Avish Kaushik
        </div>
        <div
          className={"title-"+props.selectedTheme}
          style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}
        >
          Software Developer
        </div>
        <div class="separator"></div>
        <ul class="contacts-list">
          <li class="contact-item">
            <div className={"icon-box-"+props.selectedTheme}>
              <LocationOnOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class={"contact-info-"+props.selectedTheme}>
              <p class={"contact-title-"+props.selectedTheme}>Location</p>

              <address>Washington, DC, USA</address>
            </div>
          </li>
          <li class="contact-item">
            <div className={"icon-box-"+props.selectedTheme}>
              <SchoolOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class={"contact-info-"+props.selectedTheme}>
              <p class={"contact-title-"+props.selectedTheme}>Student</p>

              <address>George Washington University</address>
            </div>
          </li>
          <li class="contact-item">
            <div className={"icon-box-"+props.selectedTheme}>
              <WorkHistoryOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class={"contact-info-"+props.selectedTheme}>
              <p class={"contact-title-"+props.selectedTheme}>Ex-Software Engineer</p>

              <address>Societe Generale Global Solution Center</address>
            </div>
          </li>
          <li class="contact-item">
            <div className={"icon-box-"+props.selectedTheme}>
              <LocalPhoneOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class={"contact-info-"+props.selectedTheme}>
              <p class={"contact-title-"+props.selectedTheme}>Phone</p>

              <address>+1-571-982-9826</address>
            </div>
          </li>
          <li class="contact-item">
            <div className={"icon-box-"+props.selectedTheme}>
              <EmailOutlinedIcon sx={{ fontSize: 20, padding: 1 }} />
            </div>

            <div class={"contact-info-"+props.selectedTheme}>
              <p class={"contact-title-"+props.selectedTheme}>Mail</p>

              <address>avish.kaushik20@gmail.com</address>
            </div>
          </li>
        </ul>
        <div class="separator"></div>
        <ul class="content-list">
          <li class="content-item">
            <a href="https://leetcode.com/u/avish00/" class="content-link">
              <img
                alt="Leetcode"
                src={leetcode}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>

          <li class="content-item">
            <a href="https://discord.com/channels/avi._.k" class="content-link">
              <img
                alt="Discord"
                src={discord}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>

          <li class="content-item">
            <a href="https://github.com/AvishKaushik" class="content-link">
              <img
                alt="GitHub"
                src={github}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>
          <li class="content-item">
            <a href="https://www.linkedin.com/in/avish-kaushik-358757197/" class="content-link">
              <img
                alt="LinkedIn"
                src={linkedin}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>
          <li class="content-item">
            <a href="https://www.hackerrank.com/profile/avish_kaushik20" class="content-link">
              <img
                alt="HackerRank"
                src={hackerrank}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>
          <li class="content-item">
            <a href="https://www.codechef.com/users/avish00" class="content-link">
              <img
                alt="CodeChef"
                src={codechef}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>
          <li class="content-item">
            <a href="https://codeforces.com/profile/avish00" class="content-link">
              <img
                alt="CodeForces"
                src={codeforces}
                style={{
                  marginRight: 10,
                  width: "inherit",
                }}
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
