import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import FanArt from "./FanArt";
import Footer from "./Footer";

const App = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  const teamApi =
    "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=pittsburgh_steelers";

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(teamApi);
      const team = await res.json();
      setTeam(team.teams[0]);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div id="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <Navbar team={team} />
          <main>
            <section>
              <Banner team={team} />
              <About team={team} />
              <FanArt team={team} />
            </section>
          </main>
          <Footer team={team} />
        </>
      )}
    </div>
  );
};

export default App;
