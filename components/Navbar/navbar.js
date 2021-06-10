/** @format */

import classNames from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState();
  const classes = classNames("header", {
    scrolled: scrolled,
  });

  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes}>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="/">
                <img src="../static/img/logo/Logo-header.svg" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
                data-parent="#accordion"
              >
                <ul className="nav navbar-nav menu_nav ml-auto ">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      <a className="nav-link ">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#services">
                      <a className="nav-link ">Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#AI">
                      <a className="nav-link ">Features</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#pricing">
                      <a className="nav-link ">Pricing</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#team">
                      <a className="nav-link ">Team</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog/">
                      <a className="nav-link ">Blog</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#contact">
                      <a className="nav-link ">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .header {
          z-index: 99;
        }

        .scrolled {
          background-color: rgba(0, 0, 0, 0.5);
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
        }

        .header_area .navbar .nav .nav-item .nav-link {
          color: #094989;
          font-weight: 750;
          padding-right: 25px;
          display: inline-block;
          font-size: 14px;
        }
        .header_area .navbar .nav .nav-item:hover .nav-link {
          color: #fdb31c;
        }
        .header_area.navbar_fixed .main_menu {
          position: fixed;
          width: 100%;
          top: -70px;
          left: 0;
          right: 0;
          background: rgba(110, 110, 110, 0.8);
          transform: translateY(70px);
          transition: transform 500ms ease, background 500ms ease;
          -webkit-transition: transform 500ms ease, background 500ms ease;
          box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
        }
        .header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
          line-height: 70px;
        }
        button {
          border: none;
        }
        .icon-bar {
          display: block;
          width: 25px;
          height: 3px;
          background: #f84b67;
          margin: auto;
          margin-bottom: 4px;
          transition: all 400ms linear;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .header_area .navbar {
            background: #000;
          }
        }
      `}</style>
    </div>
  );
}
