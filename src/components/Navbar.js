import React from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = ({ team }) => {
  const { strFacebook, strTwitter, strInstagram, strYoutube } = team;
  return (
    <header>
      <h1>NFL Fan Page Network</h1>
      <nav>
        <ul>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <li>
              <a href={strFacebook}>
                <span>
                  <FaFacebook />
                </span>
              </a>
            </li>
            <li>
              <a href={strTwitter}>
                <span>
                  <FaTwitter />
                </span>
              </a>
            </li>
            <li>
              <a href={strInstagram}>
                <span>
                  <FaInstagram />
                </span>
              </a>
            </li>
            <li>
              <a href={strYoutube}>
                <span>
                  <FaYoutube />
                </span>
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
