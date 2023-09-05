import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="header_section fixed">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link class="navbar-brand" to="/">
            <img width="150" src="images/logo1.png" alt="#" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Accueil <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/testimonial">
                  Devenir livreur
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <button type="button" class="btn btn-danger">
                Télécharger
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
