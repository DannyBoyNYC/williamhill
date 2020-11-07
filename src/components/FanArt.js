import React from "react";

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
        <img className="jersey" src={team.strTeamJersey} alt="Team Badge" />
      </div>
      <div className="content-area"></div>
    </div>
  );
};

export default FanArt;
