import * as React from "react";
import { Link } from "gatsby";
import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-8">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Anasayfa
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yönetim Paneli
                      </a>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        İletişim
                      </Link>
                    </li>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-8 social">
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
      </footer>
    );
  }
};

export default Footer;
