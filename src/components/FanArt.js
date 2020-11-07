import React from "react";
import upload from "../static/upload.png";

const FanArt = ({ team }) => {
  return (
    <div className="banner fan-art">
      <div className="hero">
        <img src={team.strTeamFanart2} alt="Team Fan Art" />
        <img src={team.strTeamFanart4} alt="Team Fan Art" />
        <img src={team.strTeamFanart3} alt="Team Fan Art" />
        <img src={team.strTeamFanart1} alt="Team Fan Art" />
      </div>
      <div className="title-area">
        <h1>Fan Photos</h1>
        <div style={{ position: "relative" }}>
          <a href="#0" onClick={() => alert("Can't you find a better photo?")}>
            <img className="upload" src={upload} alt="Upload" />
          </a>
          <img className="jersey" src={team.strTeamJersey} alt="Team Jersey" />
        </div>
      </div>
      <div className="content-area"></div>
    </div>
  );
};

export default FanArt;
