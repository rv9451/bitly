import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bgcoloer px-4 py-3">
      <a className="navbar-brand fw-bold text-warning fs-3" href="#">
        UrlShortner
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-3">
          <li className="nav-item">
            <a className="nav-link text-light navtext" href="#">Platform</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light navtext" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light navtext" href="#">Pricing</a>
          </li>
        </ul>
        <span className="text-light btn rounded p-2 navtext">Log in</span>
        <button className="btn btn-light ms-2">Sign up Free</button>
      </div>
    </nav>
  );
}
