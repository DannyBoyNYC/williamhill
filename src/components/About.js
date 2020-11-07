import React from "react";

const About = ({ team }) => {
  return (
    <div className="banner about">
      <div className="hero">
        <p>{team.strDescriptionEN}</p>
      </div>
      <div className="title-area">
        <img className="badge" src={team.strTeamBadge} alt="Team Badge" />
      </div>

      <div className="content-area">
        <ul>
          <li>Formed: {team.intFormedYear}</li>
          <li>League: {team.strLeague}</li>
          <li>
            Manager:
            <br />
            <a href="https://en.wikipedia.org/wiki/Mike_Tomlin">
              {team.strManager}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
