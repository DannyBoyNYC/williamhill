import React, { useState } from "react";

const Banner = ({ team }) => {
  const [stadiumOpen, setStadiumOpen] = useState(false);

  return (
    <section>
      <div className="banner main">
        <div className="hero">
          <img className="badge" src={team.strTeamBadge} alt="Team Badge" />
          <img src={team.strStadiumThumb} alt={team.strStadium} />
        </div>
        <div className="title-area">
          <h1>{team.strTeam && team.strTeam.split(" ")[0]}</h1>
          <img className="logo" src={team.strTeamLogo} alt="Steelers" />
        </div>

        <div className="content-area">
          <h2>{team.strStadium}</h2>
          <ul>
            <li>{team.strStadiumLocation}</li>
            <li>Capacity: {team.intStadiumCapacity}</li>
          </ul>
          <button className="link" onClick={() => setStadiumOpen(!stadiumOpen)}>
            Learn More
          </button>
        </div>
      </div>
      <div className={`modal-outer ${stadiumOpen ? "open" : ""}`}>
        <div className="modal-inner">
          <button
            className="close-modal"
            onClick={() => setStadiumOpen(!stadiumOpen)}
          >
            X
          </button>
          <h2>{team.strStadium}</h2>
          <img src={team.strStadiumThumb} alt={team.strStadium} />
          <p>{team.strStadiumDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
