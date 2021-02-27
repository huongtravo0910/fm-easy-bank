import React, { useState } from "react";
import "./header.scss";

export default function Headers() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className="header">
      <div className="overlay has-fade" />

      <nav className="container  container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={require("../images/logo.svg")} alt="logo-EasyBank" />
        </a>

        <span
          href=""
          className="header__toggle hide-for-desktop"
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="header__links hide-for-mobile">
          <span href="#">Home</span>
          <span href="#">About</span>
          <span href="#">Contact</span>
          <span href="#">Blog</span>
          <span href="#">Careers</span>
        </div>

        <span href="#" className="button header__cta hide-for-mobile">
          Request Invite
        </span>
      </nav>

      {isToggle && (
        <div className="header__menu has-fade">
          <span href="">Home</span>
          <span href="">About</span>
          <span href="">Contact</span>
          <span href="">Blog</span>
          <span href="">Careers</span>
        </div>
      )}
    </header>
  );
}
