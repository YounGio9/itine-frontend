import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="full">
              <div class="logo_footer">
                <Link to="#">
                  <img width="210" src="images/logo1.png" alt="#" />
                </Link>
              </div>
              <div class="information_f">
                <p>
                  <strong>EMAIL:</strong> contact@itine.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-6">
                <div class="widget_menu">
                  <h3>Réseaux sociaux</h3>
                  <ul>
                    <p>
                      Nous sommes également disponible sur les réseaux sociaux
                      tel que
                    </p>
                    <ul class="social-icons">
                      <li>
                        <Link to="#">
                          <i class="fab fa-facebook-square"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget_menu">
              <h3>Nous sommes disponible</h3>
              <div class="information_f">
                <p>
                  Avec notre application mobile, vous pouvez commander un cique
                </p>
              </div>
              <img
                src="https://www.soxim.fr/images/site/app-store-badge.svg"
                alt="Disponible sur App Store"
              />
              <img
                src="https://www.soxim.fr/images/site/google-play-badge.svg"
                alt="Disponible sur Google Play"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
