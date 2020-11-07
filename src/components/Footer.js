import React from "react";

const Footer = ({ team }) => {
  return (
    <footer>
      <p>
        Copyright &copy; 2020 <a href={team.strWebsite}>NHL Fan Sites</a>
      </p>
    </footer>
  );
};

export default Footer;
