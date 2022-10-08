import React from "react";
import { Link } from "gatsby";
import instagram from "../img/social/instagram.svg";
/* import "./navbar.less"; */

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{position:"fixed", width:"100vw", top:0, left:0, boxShadow: "0 5px 20px -10px #000"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img alt="uzman psikolog meltem ulutaş" className="navbar-image" src="/img/Meltem.svg"  />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-right">
              <Link className="navbar-item" to="/">
                Anasayfa
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Randevu - İletişim
              </Link>
              <a
                className="navbar-item"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className="icon">
                  <img style={ {hover:{fill:"blue"}} }src={instagram} alt="instagram link" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
