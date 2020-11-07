import React, { useState } from "react";

const Banner = ({ team }) => {
  const [stadiumOpen, setStadiumOpen] = useState(false);

  return (
    <section>
      <div className="banner">
        <div className="hero">
          <img src={team.strStadiumThumb} alt={team.strStadium} />
        </div>
        <div className="title-area">
          <h1>{team.strTeam}</h1>
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
          <p>{team.strStadiumDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
