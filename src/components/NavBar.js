import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksDisplay = links.map((link) => (
    <a key={link} href={"#"+link}>{link} </a>
  ))


  return <nav>{linksDisplay}</nav>;
}

export default NavBar;
