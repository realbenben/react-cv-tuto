import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            src="./media/workingPortrait-small.jpg"
            alt="jeanne "
            id="portrait"
          />
          <h3>Jeanne Scratch</h3>
        </div>
      </div>
      <div className="Navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Competences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://benoitpatou.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://benoitpatou.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://benoitpatou.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://benoitpatou.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>From Spirit since 1985</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
